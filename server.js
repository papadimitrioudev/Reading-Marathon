/*****************************************************************************************
 *  Reading-Marathon Leaderboard  –  Bee Theme
 *  Real-time, 3-slot scoreboard with override mode
 *  Stack: Node.js + Express + Socket.IO
 *****************************************************************************************/

/* ---------- DEPENDENCIES ---------- */
const express = require('express');
const { createServer }   = require('http');
const { Server }         = require('socket.io');
const path               = require('path');
const fs                 = require('fs');
const os                 = require('os');

/* ---------- APP INITIALISATION ---------- */
const app  = express();
const http = createServer(app);
const io   = new Server(http, { cors: { origin: '*' } });

/* ---------- CONFIG ---------- */
const PORT        = 3000;
const SCORES_FILE = path.join(__dirname, 'scores.json');

/* ---------- IN-MEMORY STORE ---------- */
// Shape:  { childID: { slots: [km1, km2, km3], total: number } }
let scores = {};

/* ---------- PERSISTENCE: LOAD ---------- */
try {
  scores = JSON.parse(fs.readFileSync(SCORES_FILE, 'utf8'));
  console.log('[Scores] Loaded from disk:', Object.keys(scores).length, 'children');
} catch {
  scores = {};
  console.log('[Scores] Starting with empty board');
}

/* ---------- PERSISTENCE: SAVE ---------- */
function saveScores() {
  fs.writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2));
  console.log('[Scores] Saved to disk');
}

/* ---------- STATIC FILES ---------- */
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

/* ---------- SOCKET.IO LOGIC ---------- */
io.on('connection', socket => {
  // Send current board to newly connected client
  socket.emit('scores', scores);

  /* ---------- ADD SCORE (ACCUMULATIVE) ---------- */
  socket.on('addScore', ({ id, km }) => {
    id = String(id).trim();
    km = parseFloat(km);
    if (!id || Number.isNaN(km) || km <= 0) return; // basic validation

    if (!scores[id]) scores[id] = { slots: [null, null, null], total: 0 };

    const slotIndex = scores[id].slots.findIndex(v => v === null);
    if (slotIndex === -1) return; // all slots full

    scores[id].slots[slotIndex] = km;
    scores[id].total += km;

    io.emit('scores', scores); // broadcast
    saveScores();
  });

  /* ---------- OVERRIDE SCORE (UPDATE MODE) ---------- */
  socket.on('addScoreOverride', ({ id, km, slot }) => {
    id = String(id).trim();
    km = parseFloat(km);
    if (!id || Number.isNaN(km) || km <= 0) return;

    if (!scores[id]) scores[id] = { slots: [null, null, null], total: 0 };

    const old = scores[id].slots[slot] || 0;
    scores[id].slots[slot] = km;
    scores[id].total += km - old; // subtract old, add new

    io.emit('scores', scores);
    saveScores();
  });

  /* ---------- WIPE BOARD ---------- */
  socket.on('reset', () => {
    scores = {};
    io.emit('scores', scores);
    saveScores();
  });
});

/* ---------- START SERVER ---------- */
http.listen(PORT, '0.0.0.0', () => {
  const ipv4 = Object.values(os.networkInterfaces())
                .flat()
                .find(i => i.family === 'IPv4' && !i.internal)?.address;
  console.log('');
  console.log('✅  Server running at:');
  console.log('    Local : http://localhost:' + PORT);
  console.log('    LAN   : http://' + (ipv4 || '<your-ip>') + ':' + PORT);
  console.log('');
});
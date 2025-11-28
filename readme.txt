# 📚 Reading-Marathon
A real-time, bee-themed scoreboard for schools & events – built with Node.js, Socket.IO and pure CSS/JS.

## 🌟 Features
- Real-Time Updates: every change pushed instantly to all devices
- 3-Slot System: each child gets 3 separate distance entries + a total
- Override Mode: tick “UPDATE”, pick slot ①/②/③ and re-enter – no reset needed
- Bee Theme: flying bees, dripping honey, hexagons, golden gradient – perfect for big screens
- Mobile First: large buttons, responsive layout – phones act as entry terminals
- Sound FX: subtle bee-buzz when a score is added (unlocks on first user-gesture)
- PIN Lock: simple 4-digit code (default: 2727) prevents accidental edits
- Reset All: teacher can wipe the board with one click (confirmation required)

## 🚀 Quick Start
1. Clone / unzip the folder.
2. Install dependencies:
   npm install
3. Start the server:
   node server.js
4. Open browser:
   - PC → http://localhost:3000
   - Phones on same Wi-Fi → http://<PC-IP>:3000
5. Enter PIN → start adding scores!

## 🎨 Customisation
- server.js → port, PIN, slot count, total logic
- public/index.html → colors, texts, sounds, animations
- public/images/ → replace logo, bee icons, honey drop

## 🔧 Tech Stack
- Backend: Node.js, Express, Socket.IO
- Frontend: Vanilla HTML5 / CSS3 / ES6
- Sounds: Web-Audio-API (no external files)
- Storage: JSON file (auto-saved on every change)

## 🐝 Tips for a flawless event
1. Test fullscreen on the projector BEFORE the event.
2. Keep the server PC wired (Wi-Fi can drop).
3. Use different tabs on the same browser for entry stations – no need for extra devices.
4. Pin a paper with the PIN near the entry desk – speeds up volunteers.
5. Backup scores.json occasionally (copy-paste).

Enjoy your reading marathon!
Made with ❤️ by the Langabee team.
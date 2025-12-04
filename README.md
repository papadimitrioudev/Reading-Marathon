\# Reading Marathon – Langabee



A real-time leaderboard system for tracking reading progress in educational marathons with a fun bee theme.

Live on : https://reading-marathon.onrender.com


\## About



Live scoring platform designed for Langabee's reading marathon events. Features dual-mode interface: mobile input for score entry and projector view for live leaderboard display.



\## Features



\- \*\*Real-time Updates\*\* - WebSocket-based live score synchronization

\- \*\*Dual Interface\*\* - Mobile input mode and projector leaderboard view

\- \*\*3-Slot System\*\* - Track up to 3 reading sessions per child

\- \*\*Override Mode\*\* - Edit existing scores with slot selection

\- \*\*PIN Protection\*\* - Secure access with 4-digit code

\- \*\*Auto-scroll Display\*\* - Smooth automatic scrolling for projector mode

\- \*\*Sound Effects\*\* - Audio feedback for actions and updates

\- \*\*Persistent Storage\*\* - Scores saved to disk automatically



\## Technologies



\- Node.js + Express

\- Socket.IO (WebSocket communication)

\- Vanilla JavaScript

\- CSS3 (custom animations, bee theme)

\- File-based persistence (JSON)



\## Installation



```bash

\# Install dependencies

npm install



\# Start server

npm start

```



Server runs on `http://localhost:3000`



\## Usage



1\. \*\*Access Code\*\*: Enter PIN `2727` to unlock

2\. \*\*Input Mode\*\*: Add scores by entering Child ID and kilometres

3\. \*\*Leaderboard Mode\*\*: Switch to projector view for live display

4\. \*\*Update Mode\*\*: Toggle override to edit existing slot scores

5\. \*\*Fullscreen\*\*: Use fullscreen button for presentation mode



\## Network Access



Access from any device on your local network:

\- Local: `http://localhost:3000`

\- LAN: `http://\[your-ip]:3000`



\## License



© 2025 Papadimitrioudev. All rights reserved.


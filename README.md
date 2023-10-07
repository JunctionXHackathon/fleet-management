### How to use
1. Clone repositories
```bash
git clone https://github.com/JunctionXHackathon/fleet-management
git clone https://github.com/JunctionXHackathon/mqtt-socket-bridge
```

2. Run MQTT socket bridge, this is a backend server that acts as a bridge between MQTT and the frontend, since it was not possible to run MQTT directly in the browser
```bash
cd mqtt-socket-bridge
npm i
node app.js
```


3. Run the frontend server
```bash
cd fleet-management
npm i
npm run dev
```
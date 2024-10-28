"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const dispatcher_1 = require("./handlers/dispatcher");
const wss = new ws_1.WebSocketServer({ port: 3000 });
wss.on("listening", () => {
    console.log(`WebSocket server have started at port ${wss.address().port}`);
});
wss.on("close", () => console.log("WebSocket server exiting..."));
wss.on("connection", (ws, req, client) => {
    const ip = req.socket.remoteAddress;
    console.log(`Connected from: ${ip}, ${client}`);
    ws.on("message", async function message(data) {
        const receivedData = JSON.parse(data);
        console.log("Received data: ", receivedData);
        const payLoad = typeof receivedData.data === "string" && receivedData.data.length
            ? JSON.parse(receivedData.data)
            : {};
        await (0, dispatcher_1.dispatchMessage)(ws, receivedData.type, payLoad);
    });
    ws.onerror = (err) => console.error(`Error received...${err}`);
    ws.onclose = () => console.log(`Client disconnected`);
});
//# sourceMappingURL=index.js.map
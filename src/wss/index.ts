import { WebSocketServer } from "ws";
import { dispatchMessage } from "./handlers/dispatcher";

const wss = new WebSocketServer({ port: 3000 });
wss.on("listening", () => {
    // @ts-ignore
    console.log(`WebSocket server have started at port ${wss.address().port}`);
});
wss.on("close", () => console.log("WebSocket server exiting..."));
wss.on("connection", (ws: WebSocket, req: any, client: any) => {
    const ip = req.socket.remoteAddress;
    console.log(`Connected from: ${ip}, ${client}`);
    // @ts-ignore
    ws.on("message", async function message(data: obj) {
        try {
            const receivedData = JSON.parse(data);
            const payLoad =
                typeof data.data === "string" && data.data.length
                    ? JSON.parse(data.data)
                    : {};
            // const payLoad = JSON.parse(receivedData.data);
            await dispatchMessage(ws, receivedData.type, payLoad);
        } catch {}
    });

    ws.onerror = (err) =>
        console.error(`Error received...
${err}`);
    ws.onclose = () => console.log(`Client disconnected`);
});

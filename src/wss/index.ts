import { WebSocket, WebSocketServer } from 'ws';
import { dispatchMessage } from "./handlers/dispatcher";

const wss = new WebSocketServer({ port: 3000 });
wss.on("listening", () => {
    console.log(`WebSocket server have started at port ${wss.address().port}`);
});
wss.on("close", () => console.log("WebSocket server exiting..."));
wss.on("connection", (ws: WebSocket, req: , client: any) => {
    const ip = req.socket.remoteAddress;
    console.log(`Connected from: ${ip}, ${client}`);
    ws.on("message", async function message(data: obj) {
        // try {
            const receivedData = JSON.parse(data);
            console.log("Received data: ", receivedData);
            const payLoad =
                typeof receivedData.data === "string" && receivedData.data.length
                    ? JSON.parse(receivedData.data)
                    : {};
            // const payLoad = JSON.parse(receivedData.data);
            await dispatchMessage(ws, receivedData.type, payLoad);
    //     } catch {
    //         console.log('An error occurred...')
    //     }
    });

    ws.onerror = (err) =>
        console.error(`Error received...${err}`);
    ws.onclose = () => console.log(`Client disconnected`);
});

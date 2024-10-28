import { userConnect } from "./user";
import { userData } from "wss/handlers/interfaces";
import { createRoom, updateRoom } from './updateRoom';
import { WebSocket } from 'ws';

export const dispatchMessage = async (
    ws: WebSocket,
    type: string,
    data: userData,
) => {
    switch (type) {
        case "reg":
            await userConnect(ws, data);
            await updateRoom(ws: WebSocket);
            break;
        case "create_room": await createRoom(ws); break;
        case "update_room": await updateRoom(ws); break;
    }
};

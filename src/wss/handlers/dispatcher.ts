import { userConnect } from "./user";
import { userData } from "wss/handlers/interfaces";

export const dispatchMessage = async (
    ws: WebSocket,
    type: string,
    data: userData,
) => {
    switch (type) {
        case "reg":
            await userConnect(ws, data);
        // case "create_game": await createGame(ws);
    }
};

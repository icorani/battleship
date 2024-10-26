import { User } from "../entities/user";
import { userData } from "wss/handlers/interfaces";

export const userConnect = async (ws: WebSocket, data: userData) => {

    const user = new User(data.name, data.password, ws);
    console.log(
        `Created user:\n\tUserID: ${user.id}\n\tUsername: ${user.userName}\n\tWS: ${user.ws.name}`,
    );
    const response = {
        type: "reg",
        data: {
            name: user.userName,
            index: user.id,
            error: false,
            errorText: "success",
        },
        id: 0,
    };
    // @ts-expect-error unknown types
    response.data = JSON.stringify(response.data);
    console.log(
        `Send response ${JSON.stringify(response)}\n for user ${response.id}`,
    );
    ws.send(JSON.stringify(response));
};

export const createRoom = async (ws: WebSocket) => {
    console.log(ws)
    //создать комнату
    //добавить текущего пользователя в комнату
};

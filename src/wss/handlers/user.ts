import { Users } from "../entities/user";
import { userData } from "wss/handlers/interfaces";

export const userConnect = async (ws: WebSocket, data: userData) => {
    let err = false
    let user;
    const userCheck = Users.check()
    console.log('Usercheck result: ', userCheck)
    if (userCheck == false) {
        user = new Users(data.name, data.password, ws);
        console.log(
          `Created user:\n\tUserID: ${user.id}\n\tUsername: ${user.userName}\n\tWS: ${user.ws}`,
        );
    } else {
        user = userCheck
        console.log(user[0])
        console.log(user)
        err = (user.password != data.password)

    }

    const response = {
        type: "reg",
        data: {
            name: user.userName,
            index: user.id,
            error: err,
            errorText: "",
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


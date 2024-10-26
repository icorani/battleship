"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoom = exports.userConnect = void 0;
const user_1 = require("../entities/user");
const userConnect = async (ws, data) => {
    const user = new user_1.User(data.name, data.password, ws);
    console.log(`Created user:\n\tUserID: ${user.id}\n\tUsername: ${user.userName}\n\tWS: ${user.ws.name}`);
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
    response.data = JSON.stringify(response.data);
    console.log(`Send response ${JSON.stringify(response)}\n for user ${response.id}`);
    ws.send(JSON.stringify(response));
};
exports.userConnect = userConnect;
const createRoom = async (ws) => {
    console.log(ws);
};
exports.createRoom = createRoom;
//# sourceMappingURL=user.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConnect = void 0;
const user_1 = require("../entities/user");
const userConnect = async (ws, data) => {
    let err = false;
    let user;
    const userCheck = user_1.Users.check();
    console.log('Usercheck result: ', userCheck);
    if (userCheck == false) {
        user = new user_1.Users(data.name, data.password, ws);
        console.log(`Created user:\n\tUserID: ${user.id}\n\tUsername: ${user.userName}\n\tWS: ${user.ws}`);
    }
    else {
        user = userCheck;
        console.log(user[0]);
        console.log(user);
        err = (user.password != data.password);
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
    response.data = JSON.stringify(response.data);
    console.log(`Send response ${JSON.stringify(response)}\n for user ${response.id}`);
    ws.send(JSON.stringify(response));
};
exports.userConnect = userConnect;
//# sourceMappingURL=user.js.map
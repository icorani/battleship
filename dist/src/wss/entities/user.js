"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const crypto_1 = require("crypto");
class Users {
    constructor(userName, password, ws) {
        this.userName = userName;
        this.id = (0, crypto_1.randomUUID)();
        this.password = password;
        this.wins = 0;
        this.ws = ws;
        Users.allUsers.push(this);
    }
}
exports.Users = Users;
Users.allUsers = [];
Users.check = function (userName, password, ws) {
    const filtered = Users.allUsers.filter(user => user.userName == userName);
    return filtered[0] !== undefined ? filtered[0] : new Users(userName, password, ws);
};
//# sourceMappingURL=user.js.map
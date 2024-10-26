"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
class User {
    constructor(userName, password, ws) {
        this.userName = userName;
        this.id = (0, crypto_1.randomUUID)();
        this.password = password;
        this.wins = 0;
        this.ws = ws;
    }
    allUsers() {
        Object.values(this.id);
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map
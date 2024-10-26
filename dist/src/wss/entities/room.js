"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const crypto_1 = require("crypto");
class Room {
    constructor(user) {
        this.roomId = (0, crypto_1.randomUUID)();
        this.users = [user];
    }
    addUserToRoom(user) {
        this.users.push(user);
    }
}
exports.Room = Room;
//# sourceMappingURL=room.js.map
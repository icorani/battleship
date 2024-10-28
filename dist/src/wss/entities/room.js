"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitingPlayersRoom = exports.Rooms = void 0;
const crypto_1 = require("crypto");
class Rooms {
    constructor(user) {
        this.roomId = (0, crypto_1.randomUUID)();
        this.users = [user];
        Rooms.allRooms.push(this);
    }
    addUserToRoom(user) {
        this.users.push(user);
    }
}
exports.Rooms = Rooms;
Rooms.allRooms = [];
const waitingPlayersRoom = () => {
    return Rooms.allRooms.filter(room => room.users.length < 2);
};
exports.waitingPlayersRoom = waitingPlayersRoom;
//# sourceMappingURL=room.js.map
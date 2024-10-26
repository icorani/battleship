import { randomUUID, UUID } from "crypto";
import { User } from "./user";

export class Room {
    roomId: UUID;
    users: Array<User>;

    constructor(user: User) {
        this.roomId = randomUUID();
        this.users = [user];
    }

    addUserToRoom(user: User) {
        this.users.push(user);
    }

    // deleteRoom(roomID: UUID){

    // }
}

import { randomUUID, UUID } from "crypto";
export class User {
    userName: string;
    id: UUID;
    password: string;
    wins: number;
    ws: WebSocket;

    constructor(userName: string, password: string, ws: WebSocket) {
        this.userName = userName;
        this.id = randomUUID();
        this.password = password;
        this.wins = 0;
        this.ws = ws;
    }

    allUsers(){
        Object.values(this.id)
    }
}

import { randomUUID, UUID } from 'crypto';
import { WebSocket } from 'ws';

export class Users {
  userName!: string;
  id: UUID | undefined;
  password: string | undefined;
  wins: number | undefined;
  ws: WebSocket;

  static allUsers: Array<Users>=[];

  static check = function(userName: string, password: string, ws: WebSocket):Users {
    const filtered = Users.allUsers.filter(user=> user.userName == userName);
    return filtered[0] !== undefined ? filtered[0]: new Users(userName, password, ws);
  };


  constructor(userName: string, password: string, ws: WebSocket) {
      this.userName = userName;
      this.id = randomUUID();
      this.password = password;
      this.wins = 0;
      this.ws = ws;
      Users.allUsers.push(this);
  }
}

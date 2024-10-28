import { randomUUID, UUID } from 'crypto';
import { Users } from './user';

export class Rooms {
  roomId: UUID;
  users: Array<Users>;
  static allRooms: Array<Rooms> = [];

  constructor(user: Users) {
    this.roomId = randomUUID();
    this.users = [user];
    Rooms.allRooms.push(this);
  }

  addUserToRoom(user: Users) {
    this.users.push(user);
  }


}

export const waitingPlayersRoom = () => {
  return Rooms.allRooms.filter(room => room.users.length < 2);
};
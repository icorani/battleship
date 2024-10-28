import { Rooms, waitingPlayersRoom } from '../entities/room';
import { WebSocket } from 'ws';
import { Users } from '../entities/user';

export const updateRoom = async (ws: WebSocket) => {
    const roomList = waitingPlayersRoom()
    console.log(roomList);
    ws.send(JSON.stringify(roomList,['id','Users']));
};

export  const createRoom = async function (ws: WebSocket)  {
    const user= Users.allUsers.filter(user=>user.ws === ws)[0]
    console.log('Creating room for user: ', user.userName)
    const r = new Rooms(user)
    console.log(`Created room ${r.roomId} with users ${r.users.values()}`)
}
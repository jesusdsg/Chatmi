import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

/* Decorator with port and cors properties */
@WebSocketGateway(82, {
  cors: {
    origin: '*',
  },
})
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  /* Server instance */
  @WebSocketServer() server: Server;

  userList: any = [];

  afterInit(server: any) {
    console.log('Server started');
  }

  handleConnection(client: any, ...args: any[]) {
    console.log('Connected server');
  }

  handleDisconnect(client: any) {
    console.log('Disconnect Server');
  }

  /* When users joins to the room */
  @SubscribeMessage('event_join') handleJoinRoom(client: Socket, room: string) {
    console.log('Joined to room_' + room);
    client.join(`room_'${room}`);
  }

  /* When someone write a new message */
  @SubscribeMessage('event_message') //TODO Backend
  handleIncommingMessage(
    socket: Socket,
    payload: { from: string; body: string },
  ) {
    const { from, body } = payload;
    console.log(payload);
    /* this.server.to(`room_${room}`).emit('new_message', {
      body: body,
      from: socket.id,
    }); */
    this.server.emit('new_message', { body: body, from });
  }

  @SubscribeMessage('disconnect_user')
  handleDisconnectUser(socket: Socket, username: string) {
    const newList = this.userList.filter(
      (x: { username: string }) => x.username !== username,
    );
    this.userList = newList;
    this.server.emit('user_list', this.userList);
  }

  @SubscribeMessage('user_list')
  handleUserList(socket: Socket, username: any) {
    const exists = this.userList.find(
      (x: { username: string }) => x.username == username,
    );
    if (!!exists) {
      this.server.emit('user_exists', username);
    } else {
      this.userList.push({ username });
      this.server.emit('user_list', this.userList);
    }
  }

  /* When someone leaves the room */
  @SubscribeMessage('event_leave') handleLeaveRoom(
    client: Socket,
    room: string,
  ) {
    console.log(`Goodbye room_${room}`);
    client.leave(`room_${room}`);
  }
}

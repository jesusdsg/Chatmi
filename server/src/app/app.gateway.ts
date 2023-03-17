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
    console.log('Joined to room_', room);
    client.join(`room_'${room}`);
  }

  /* When someone write a new message */
  @SubscribeMessage('event_message') handleIncommingMessage(
    client: Socket,
    payload: { room: string; message: string },
  ) {
    const { room, message } = payload;
    console.log('Message ', payload);
    this.server.to(`room_${room}`).emit('new_message', message);
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

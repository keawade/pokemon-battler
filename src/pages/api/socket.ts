import type { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'socket.io';

const socketHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (!(res as any).socket.server.io) {
    console.log('*First use, starting socket.io');

    const io = new Server((res as any).socket.server);

    io.on('connection', (socket) => {
      socket.broadcast.emit('a user connected');
      socket.on('hello', (msg) => {
        socket.emit('hello', 'world!');
      });
    });

    (res as any).socket.server.io = io;
  } else {
    console.log('socket.io already running');
  }
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default socketHandler;

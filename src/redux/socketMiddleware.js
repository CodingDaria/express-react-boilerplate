import io from 'socket.io-client';

const socketMiddleware = () => (next) => (action) => {
  let socket = io(window.location.origin, {
    path: '/ws',
  });
  socket.emit('action', action);
  return next(action);
};

export default socketMiddleware;

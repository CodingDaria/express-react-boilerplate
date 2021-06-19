import io from 'socket.io-client';

const socketMiddleware = ({ dispatch }) => {
  const socket = io(window.location.origin, {
    path: '/ws',
  });

  socket.on('server', (message) => {
    switch (message.type) {
      case 'socket_type': {
        dispatch({ type: 'REDUX_TYPE', payload: message.payload });
        break;
      }
      default: {
        console.log(`message from server ${message.type} not handled`);
      }
    }
  });

  return (next) => (action) => {
    switch (action.type) {
      case 'socket_type': {
        socket.emit('action', action);
        break;
      }
      default: {
        return next(action);
      }
    }
    return next(action);
  };
};

export default socketMiddleware;

import SocketIO from 'socket.io-client';

// Create socket connection
export default (id) => {
    console.log(id);
    return SocketIO('http://localhost:8000', {
        reconnectionAttempts: 10,
        debug: true,
        query: {
             user_id: id
         }
    });
}
import SocketIO from 'socket.io-client';

// 创建socket连接，http使用ws协议，https使用wss协议
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
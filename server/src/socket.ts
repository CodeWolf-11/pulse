import { Server, Socket } from "socket.io";

interface CustomSocket extends Socket {
    room?: string
}

export const socketConfig = (io: Server) => {

    io.use((socket: CustomSocket, next) => {

        const room = socket.handshake.auth.room || socket.handshake.headers.room
        if (!room) {

            return next(new Error("Invalid Room"));
        }

        socket.room = room;
        next();
    });

    io.on("connection", (socket: CustomSocket) => {
        console.log("The socket connected", socket.id);

        //joining a room
        socket.join(socket.room!);

        io.on("disconnect", (socket) => {
            console.log("A user disconnected", socket.id)
        });

        socket.on("message", (data) => {
            io.to(socket.room!).emit("message", data);
        });
    });
}
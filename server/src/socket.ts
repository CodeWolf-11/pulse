import { Server } from "socket.io";

export const socketConfig = (io: Server) => {

    io.on("connection", (socket) => {
        console.log("The socket connected", socket.id);

        io.on("disconnect", (socket) => {
            console.log("A user disconnected", socket.id)
        });

        socket.on("message", (data) => {
            console.log(data);
            socket.broadcast.emit("message", data);
        });
    });
}
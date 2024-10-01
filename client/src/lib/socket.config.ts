import { io, Socket } from "socket.io-client";
import ENV from "./env";


let socket: Socket;

export const getSocket = () => {

    if (!socket) {
        socket = io(ENV.BACKEND_URL);
    }

    return socket;
}
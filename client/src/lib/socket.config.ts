import { io, Socket } from "socket.io-client";
import ENV from "./env";

let socket: Socket //this will be the single source of truth

export const getSocket = () => {

    if (!socket) {
        socket = io(ENV.BACKEND_URL, {
            autoConnect: false
        });
    }

    return socket;
}
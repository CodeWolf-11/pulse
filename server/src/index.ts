import Express from "express";
import cors from "cors";
import routes from "./routes";
import "dotenv/config";
import { Server } from "socket.io";
import { createServer } from "http";
import { socketConfig } from "./socket";
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redis from "./config/redis.config";
import { instrument } from "@socket.io/admin-ui";

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use("/api", routes);
const PORT = Number(process.env.PORT) || 5000;


const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: [process.env.CLIENT_APP_URL!, process.env.SOCKET_ADMIN_UI!],
        credentials: true
    },
    adapter: createAdapter(redis)
});

socketConfig(io);

instrument(io, {
    auth: false,
    mode: "development"
});

export { io };



server.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
});

import Express from "express";
import cors from "cors";
import routes from "./routes";

const app = Express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use("/api", routes);

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
})
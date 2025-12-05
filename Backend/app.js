import express from "express";
import apiRoutes from "./routers/apiRoutes.js"
import cors from "cors";
import { morganMiddleware } from "./middleware/logger.js";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morganMiddleware);


const __dirname = path.resolve();
app.use("/logs", express.static(path.join(__dirname, "logs")));

app.use("/api", apiRoutes);

app.get("/", (req, res) => res.send("Logging & Monitoring API"));

export default app;

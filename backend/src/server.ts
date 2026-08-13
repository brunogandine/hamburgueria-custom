import dotenv from "dotenv";
dotenv.config();

import express from "express";
import helmet from "helmet";
import cors from "cors";

import apiRouter from "./routes";

const PORT = process.env.PORT;

const app = express();

// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));
app.use(helmet({
    crossOriginResourcePolicy: false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
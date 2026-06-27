import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes";
// to use impor statements
// add "type" :"module" in package.json
const app = express();

app.use(express.json()); //used for parsing
app.use(morgan("dev")); // logger :-> records details about the request sent
app.use("/api/auth", authRouter);
export default app;

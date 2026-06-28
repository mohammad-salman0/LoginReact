import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
// to use impor statements
// add "type" :"module" in package.json
const app = express();

app.use(express.json()); //used for parsing
app.use(morgan("dev")); // logger :-> records details about the request sent
app.use("/api/auth", authRouter); // /api/auth is the prefix for every request assosiated with authRouter api end point
export default app;

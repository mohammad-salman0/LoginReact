import express from "express";
import morgan from "morgan";
// to use impor statements
// add "type" :"module" in package.json
const app = express();

app.use(express.json());
app.use(morgan("dev")); // logger records details about the request sent

export default app;

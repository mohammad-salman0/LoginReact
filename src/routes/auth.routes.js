import { Router } from "express";

const authRouter = Router(); // is used for creating api end points

//  whole api end point is /api/auth/register because of the prefix in app.js
authRouter.post("/register");

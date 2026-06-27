import { Router } from "express";
import * as authController from "./controllers/auth.controller.js";

const authRouter = Router(); // is used for creating api end points

// router helps us to group api end points for a similar feature, category

//  whole api end point is /api/auth/register because of the prefix in app.js
authRouter.post("/register", authController.register);

export default authRouter;

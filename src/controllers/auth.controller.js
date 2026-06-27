import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
// the below function defines the fucntion of the api end point
// /api/auth/register
export async function register(req, res) {
  const { username, email, password } = req.body; //extracting data from request
  // checking if the user already exists as usrname and email are unique as per the defined schema
  const isAlreadyRegistered = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isAlreadyRegistered) {
    return res.status(409).json({
      message: "username or email already exits",
    });
  }
  // creating hash password to be saved in the database
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  //storing data in the database
  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });
  // generating jwt token
  const token = jwt.sign(
    {
      id: user._id,
    },
    config.JWT_SECRET,
    {
      expiresIn: "1d",
    },
  );

  //sending response
  res.status(201).json({
    message: "user registered successfully",
    user: {
      username,
      email,
    },
    token,
  });
}

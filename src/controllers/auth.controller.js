import userModel from "../models/user.model.js";
import crypto from "crypto";
// the below function defines the fucntion of the api end point
// /api/auth/register
export async function register(req, res) {
  const [username, email, password] = req.body; //extracting data from request
  // checking if the user already exists as usrname and email are unique as per the defined schema
  const isAlreadyRegistered = await userModel.findOne({
    $or: [username, email],
  });
  if (isAlreadyRegistered) {
    res.status(409).json({
      message: "username or email already exits",
    });
  }
  // creating hash password to be saved in the database
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  //storing data in the database
  const user = userModel.create({
    username,
    email,
    password: hashedPassword,
  });
}

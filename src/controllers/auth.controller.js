import userModel from "../models/user.model";
// the below function defines the fucntion of the api end point
// /api/auth/register
async function register(req, res) {
  const [username, email, password] = req.body; //extracting data from request
  // checking if the user already exists as usrname and email are unique as per the defined schema
  const isAlreadyRegistered = await userModel.findOne({
    $or: [username, email],
  });
}

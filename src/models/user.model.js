import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username must be unique"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "eamil must be unique"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const user = mongoose.model("user", userSchema);

export default user;

import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  role: String,
  tokan: String,
});

const User = mongoose.model("user", userschema);

export default User;

import User from "../Models/User.schema.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// new register or signup

export const newregister = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    //console.log(hashpassword);

    const newuser = new User({ username, email, password: hashpassword, role });
    await newuser.save();
    res
      .status(200)
      .json({ message: "user registerd sucessfully", data: newuser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login user or signin

export const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    const passwordmatch = await bcrypt.compare(password, user.password);
    if (!passwordmatch) {
      return res.status(400).json({ message: "invalid password" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    user.tokan = token;
    await user.save();
    res
      .status(200)
      .json({ message: "user logged in succesfully", token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get user the role is user:

export const getuser = async (req, res) => {
  try {
    const userid = req.user._id;
    const users = await User.findById(userid); // Retrieves all user data
    res.status(200).json({ message: "All user deatils retrieved successfully", data: [users] });
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
};


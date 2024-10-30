import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set('strictQuery', true);

const connectdb = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connected Successfully");
        
    } catch (error){
        console.log(error);
    }

}

export default connectdb;
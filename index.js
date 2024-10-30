import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectdb from './Database/DBconfig.js';
import userrouter from './Routter/User.routter.js'

dotenv.config();

const app = express();

app.use(express.json());

connectdb();

app.use(cors());

app.get('/',(req,res) =>{
    res.status(200).send("Welcome to User Authentication and Authorization with Bearer Token API")
});

app.use('/api/auth',userrouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
  console.log(`Server running on port ${PORT}`);
})
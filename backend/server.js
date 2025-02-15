import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js'

dotenv.config();

const app = express();

app.get("/products" , (req, res) => {});

app.listen(3000, () => {
    connectDB();
    console.log("Server started at http://localhost:3000");
});

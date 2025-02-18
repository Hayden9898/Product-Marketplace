import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js'

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //allows app to accept JSON data into teh req.body

app.use("/api/products", productRoutes);
//Mounts router with the prefix route

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

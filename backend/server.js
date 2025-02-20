import express from 'express';
import dotenv from "dotenv"
import path from 'path';
import { connectDB } from './config/db.js'

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //allows app to accept JSON data into teh req.body

const __dirname = path.resolve();

app.use("/api/products", productRoutes);
//Mounts router with the prefix route

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    //Returns user to index.html if they visit any other route
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
 
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});

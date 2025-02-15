import express from 'express';
import dotenv from "dotenv"
import { connectDB } from './config/db.js'

dotenv.config();

const app = express();

app.post("/products" , async (req, res) => {
    const product = req.body; ///user sends this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, message: "Please Provide all fields"});
    }

    const newProduct = new Product(product)
    
    try{
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct});
        //Code 201 indicates successful creation of object on server
    } catch (error) {
        console.error("Error in Create Product: " +  error.message)
        res.status(500).json({ success: false, message: "Server Error"})
        //Code 500 indicates internal server error
    }
});

app.listen(3000, () => {
    connectDB();
    console.log("Server started at http://localhost:3000");
});

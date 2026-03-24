import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

import productsRoutes from './modules/product/product.route'

dotenv.config();

const app = express();

// middleware 
app.use(express.json());

// routes 
app.get("/", (req, res) => {
  res.send("Hello Home page");
});


app.use('/api/products', productsRoutes);

// start server and connect database
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🚀`));
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
}

startServer(); 
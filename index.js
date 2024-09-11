import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/products.js";
import userRoutes from "./routes/users.js";
import { connectDB } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT  || 8080;

//Middleware
app.use(bodyParser.json());

//Using Cors for Specific Origin
app.use(
  cors({
    origin: process.env.ORIGIN,  //"http://localhost:3000"
    methods: ["GET", "POST"],
  })
);

//Database Connection
connectDB();

//Route
app.use("/products", productRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) =>{
  res.send("welcome to the api")
})

//Running server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

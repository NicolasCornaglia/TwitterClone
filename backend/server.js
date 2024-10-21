import express from "express";
import authRoutes from "./routes/auth.routes.js";

import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // to parse request.body!
app.use(express.urlencoded({ extended: true })); // to parse from data(urlencoded)
app.use(cookieParser());

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`Backend server started in port ${PORT}`);
    connectMongoDB();
})
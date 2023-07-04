const express=require("express");
const dotenv =require("dotenv");
import connectDB from "./config/db.js";
import colors from "colors";
import path from "path";

import noteRoutes from "./routes/noteRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const e=require('dotenv').config({ path: './.env' });
dotenv.config();

connectDB();

const app = express(); // main thing

app.use(express.json()); // to accept json data

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

//"dev": "concurrently \"npm run server\" \"npm run client\"",
const PORT=process.env.PORT || 9000;
app.listen(PORT,console.log("server"))
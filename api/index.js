import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB is connected"))
  .catch(err => console.error("❌ Mongo connection error:", err));
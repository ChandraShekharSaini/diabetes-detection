import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const DB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, 
    });

    console.log("MongoDB Connected Successfully",process.env.MONGODB_URI,);
    console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET);
    console.log("GOOGLE_CALLBACK_URL:", process.env.GOOGLE_CALLBACK_URL);
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
  }
};

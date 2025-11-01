import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const DB = () => {
  
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("DB Conected");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

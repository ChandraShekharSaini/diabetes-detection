import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const DB = () => {
  
  mongoose
    .connect("mongodb+srv://chandrashekharsaini322_db_user:red123@glucoai.kv4gm2r.mongodb.net/?appName=GlucoAI")
    .then(() => {
      console.log("DB Conected");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

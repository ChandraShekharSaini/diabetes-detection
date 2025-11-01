import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const DB = () => {


  
  mongoose
    .connect("mongodb+srv://chandrashekharsaini322_db_user:red123@glucoai.kv4gm2r.mongodb.net/?appName=GlucoAI")
    .then(() => {
      console.log("DB Conected");

      
  console.log("Google Sectect",process.env.GOOGLE_CLIENT_SECRET);
  console.log("gOOGLE cALLBACK",process.env.GOOGLE_CALLBACK_URL);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

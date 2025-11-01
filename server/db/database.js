import mongoose from "mongoose";

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

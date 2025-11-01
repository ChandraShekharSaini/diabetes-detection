import mongoose from "mongoose";

export const DB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/diabeticdetection")
    .then(() => {
      console.log("DB Conected");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

import express from "express";
import cors from "cors";

import { DB } from "./db/database.js";
const PORT = 3400;
const app = express();
DB();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userAuthRoutes from "./routes/userAuthRoutes.js";
app.use("/api/v1/auth", userAuthRoutes);

app.listen(PORT, () => {
  console.log("http://localhost:", PORT);
});

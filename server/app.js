import express from "express";
import cors from "cors";
import jsonwebtoken from "jsonwebtoken";

import { DB } from "./db/database.js";
const PORT = 3400;
const app = express();
DB();

app.use(
  cors({
    origin: ["https://diabetes-detection-eta.vercel.app" ,"http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import googleAuthentication from "./authentication/googleAutjentication.js";
app.use(googleAuthentication.initialize());
app.get(
  "/auth/google",
  googleAuthentication.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

app.get(
  "/auth/google/callback",
  googleAuthentication.authenticate("google", {
    failureRedirect: process.env.Failure_Redirect,
    session: false,
  }),
  function (req, res) {
    const token = jsonwebtoken.sign(
      { user: req.user },
      process.env.JWT_SECRET,
      {
        expiresIn: "1hr",
      }
    );
    console.log(token);
    res.redirect(`${process.env.FRONTEND_ORIGIN}?token=${token}`);
  }
);

import userAuthRoutes from "./routes/userAuthRoutes.js";
app.use("/api/v1/auth", userAuthRoutes);

app.get("/", (req, res, next) => {
  res.json({
    message: "My Server is working",
  });
});

app.listen(PORT, () => {
  console.log("http://localhost:", PORT);
});

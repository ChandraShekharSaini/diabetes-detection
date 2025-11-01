import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import User from "../models/User.model.js";
import passportGenerator from "../utils/passwordGenerator.js";
import dotenv from "dotenv";
dotenv.config()

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const existedUser = await User.findOne({
          email: profile.emails[0].value,
        });

        if (existedUser) {
          return cb(null, existedUser);
        }

        const generatedPassword = passportGenerator(profile.displayName);

        const newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          password: generatedPassword,
          photos: profile.photos[0].value,
        });

        await newUser.save();

        return cb(null, newUser);
      } catch (error) {
        cb(error, false);
      }
    }
  )
);

export default passport;

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import User from "../models/User.model.js";
import passportGenerator from "../utils/passwordGenerator.js";

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "659689354757-8979h4g39v1cu494l9ohann1crm0qb07.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3400/auth/google/callback",
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

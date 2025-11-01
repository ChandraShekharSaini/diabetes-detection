import crypto from "crypto";

const passportGenerator = (username) => {
  // Generate a random string using crypto for security
  const randomBytes = crypto.randomBytes(4).toString("hex"); // 8 random characters

  // Take part of the username (first 3 letters)
  const namePart = username.slice(0, 3).toLowerCase();

  // Add some variation with current time (for uniqueness)
  const timePart = Date.now().toString().slice(-4); // last 4 digits of timestamp

  // Combine all to make a password
  const password = `${namePart}@${randomBytes}${timePart}`;

  return password;
};

export default passportGenerator;

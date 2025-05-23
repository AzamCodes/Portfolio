// scripts/hashPassword.ts
const bcrypt = require("bcrypt");

const password = "azam1234"; // Replace with your real admin password
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err: Error, hash: string) => {
  if (err) {
    console.error("Error hashing password:", err);
  } else {
    console.log("Hashed password:", hash);
  }
});

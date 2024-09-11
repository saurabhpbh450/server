import mongoose from "mongoose";
// import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// userSchema.password = bcrypt.hashSync(
//   userSchema.password,
//   bcrypt.genSaltSync(10, "hasjkdasewawaZx")
// );

export default mongoose.model("User", userSchema);

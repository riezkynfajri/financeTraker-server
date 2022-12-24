const mongoose = require("mongoose");
const { hashPass } = require("../helpers/validators");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Username is Required"] },
  password: { type: String, required: [true, "Password is Required"] },
});

UserSchema.pre("save", function (next) {
  let user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  user.password = hashPass(user.password);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

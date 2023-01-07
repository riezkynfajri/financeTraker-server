const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  { hashPass } = require("../helpers/validators");

const UserSchema = new Schema({
  name: { type: String, required: [true, "Username is required"] },
  password: { type: String, required: [true, "Password is required"] },
  income: { type: Number, required: false },
  expenses: [{
    type: Schema.Types.ObjectId,
    ref: "Expense"
  }]
});

UserSchema.pre("save", function (next) {
  let user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();
  if (!user.isModified("income")) user.income = 0;
  user.password = hashPass(user.password);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

const { comparePass, createToken } = require("../helpers/validators");
const User = require("../models/User");

module.exports = class UserController {
  static async login(req, res, next) {
    try {
      const { name, password } = req.body;
      if (!name) throw new Error('name');
      if (!password) throw new Error('password');
      const user = await User.findOne({ name });
      if (!user) throw new Error('invalid');
      if (!comparePass(password, user.password)) throw new Error('invalid'); //check the password
      const payload = { id: user.id, name: user.name };
      const accessToken = createToken(payload)
      res.status(200).json({token: accessToken});
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { name, password } = req.body;
      await User.create({ name, password });
      res.status(200).json({ message: "User Created." });
    } catch (err) {
      next(err);
    }
  }
};

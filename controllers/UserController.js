const User = require("../models/User");

module.exports = class UserController {
  static async getUsers(req, res, next) {
    try {
      const users = await User.find();
      users.forEach((el) => (el.password = undefined));
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async addUser(req, res, next) {
    try {
      const { name, password } = req.body;
      await User.create({ name, password });
      res.status(200).json({ message: "User Created." });
    } catch (err) {
      next(err);
    }
  }
};

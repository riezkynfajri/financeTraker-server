const User = require("../models/User");

module.exports = class DataController {
    static async getData(req, res, next) {
        try {
            res.status(200).json('test');
        } catch (err) {
            next(err);
        }
    }

    static async updateIncome(req, res, next) {
        try {
            const { _id } = req.userData,
                { income } = req.body;

            await User.findOneAndUpdate({ _id }, { income: +income });
            res.status(200).json({ message: 'Your income has been updated!' });
        } catch (err) {
            next(err);
        }
    }
};
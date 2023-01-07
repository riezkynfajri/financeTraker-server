const User = require("../models/User"),
    Expense = require("../models/Expense");

module.exports = class DataController {
    static async getExpenses(req, res, next) {
        try {
            const { _id } = req.userData;
            const expenses = await Expense.find({ user: { _id } });
            res.status(200).json({ data: expenses });
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

    static async addExpense(req, res, next) {
        try {
            const { _id } = req.userData;
            const { date, type, amount, description } = req.body;
            const input = { date, type, amount, description };
            await Expense.create({
                ...input,
                user: { _id }
            });
            res.status(201).json({ message: 'expense added!' });
        } catch (err) {
            next(err);
        }
    }

    static async deleteExpense(req, res, next) {
        try {
            const { _id } = req.userData;
            const { expId } = req.params;

            await Expense.findOneAndDelete({ _id: expId });
            //? TODO handle error if expense ga ada

            res.status(200).json({ message: 'deleted' });
        } catch (err) {
            next(err);
        }
    }
};
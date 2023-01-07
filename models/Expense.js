const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    date: { type: Date, required: [true, "Date is required"] },
    type: { type: String, required: [true, "Expense type is required"] },
    amount: { type: Number, required: [true, "Expense amount is required"] },
    description: { type: String },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
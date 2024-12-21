const Expense = require("../models/expenseModel");
exports.addExpense = async (req, res) => {
  const { title, amount, type, date, category, description } = req.body;

  const expense = Expense({
    title,
    amount,
    type,
    date,
    category,
    description,
  });
try {
    if(!title || !amount || !date || !category)
        return res.status(400).json({ message: "All fields are required" });
    if(amount < 0 || !amount === 'number')
        return res.status(400).json({ message: "Amount should be a positive number" });
    await expense.save();
    res.status(201).json({ message: "Expense added successfully" });
} catch (error) {
    res.status(500).json({ message: "Server Error: " + error.message });
}
};

exports.getExpenses= async (req, res) => {
try {
  const expense = await Expense.find().sort({createdAt:-1})
  res.status(200).json(expense);
} catch (error) {
  res.status(500).json({ message: "Error: " + error.message });
}
};

exports.deleteExpense = async (req, res) => {
  const {id} = req.params;
  try {
    Expense.findByIdAndDelete(id)
  .then((expense) => {
    res.status(200).json({ message: "expense deleted"});
  })
  } catch (error) {
    res.status(500).json({ message:"error deleting"});
  }
};


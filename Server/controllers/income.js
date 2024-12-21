const Income = require("../models/incomeModel");
exports.addIncome = async (req, res) => {
  const { title, amount, type, date, category, description } = req.body;

  const income = Income({
    userId: req.user._id,
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
    await income.save();
    res.status(201).json({ message: "Income added successfully" });
} catch (error) {
    res.status(500).json({ message: "Server Error: " + error.message });
}
};

exports.getIncomes= async (req, res) => {
try {
  const income = await Income.find({userId: req.user._id}).sort({createdAt:-1})
  res.status(200).json(income);
} catch (error) {
  res.status(500).json({ message: "Error: " + error.message });
}
};

exports.deleteIncome = async (req, res) => {
  const {id} = req.params;
  try {
    Income.findByIdAndDelete(id)
  .then((income) => {
    res.status(200).json({ message: "Income deleted"});
  })
  } catch (error) {
    res.status(500).json({ message:"error deleting"});
  }
};


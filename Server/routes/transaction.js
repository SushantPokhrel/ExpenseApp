const {Router}= require('express');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const router = Router();

router.get('/'),(req, res)=>{
    res.send("Incomes Route");
}
router.post("/add-income",addIncome)
.get("/get-incomes",getIncomes)
.delete("/delete-income/:id",deleteIncome);

module.exports = router;
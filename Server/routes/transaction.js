const {Router}= require('express');
const { addIncome } = require('../controllers/income');
const router = Router();

router.get('/'),(req, res)=>{
    res.send("Incomes Route");
}
router.post("/add-income",addIncome);

module.exports = router;
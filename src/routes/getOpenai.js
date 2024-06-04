const { Router } = require('express');
const { gpt_bill_income } = require('../controllers/Openai')
const router = Router();


router.post('/', gpt_bill_income)
//router.put('/:id', putIncome);


module.exports = router;
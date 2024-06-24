const { Router } = require('express');
const {getAllIncomes, getIncomeById, addIncome, putIncome, deleteIncome, addIncomeForm} = require('../controllers/Ingresos')
const router = Router();

router.get('/', getAllIncomes)
router.get('/:id', getIncomeById)
router.post('/', addIncome)
router.post('/income', addIncomeForm)
router.put('/:id', putIncome);
router.delete('/:id', deleteIncome);

module.exports = router;
const { Router } = require('express');
const { getDifBillsForMonth } = require('../controllers/Admin')
const router = Router();

router.get('/billm', getDifBillsForMonth)
//router.get('/income', getTotalIncomesForMonth)
//router.get('/b_description', getBillsbyNamexMouth)
//router.get('/i_description', getIncomesbyNamexMouth)
//router.put('/:id', putBill);
//router.delete('/:id', deleteBill);

module.exports = router;





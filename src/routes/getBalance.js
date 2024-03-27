const { Router } = require('express');
const {getTotalBillsForMonth, getTotalIncomesForMonth, getBillsbyNamexMouth, getIncomesbyNamexMouth} = require('../controllers/Balance')
const router = Router();

router.get('/bill', getTotalBillsForMonth)
router.get('/income', getTotalIncomesForMonth)
router.get('/b_description', getBillsbyNamexMouth)
router.get('/i_description', getIncomesbyNamexMouth)
//router.put('/:id', putBill);
//router.delete('/:id', deleteBill);

module.exports = router;
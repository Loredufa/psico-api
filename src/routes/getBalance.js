const { Router } = require('express');
const {getTotalBillsForMonth, getTotalIncomesForMonth, getBillsbyNamexMouth, getIncomesbyNamexMouth, getCurrentBillsMonth, 
    getCurrentDeferidoBills, getCurrentIncomesMonth, getCurrentPendingIncome} = require('../controllers/Balance')
const router = Router();

router.get('/bill', getTotalBillsForMonth)
router.get('/income', getTotalIncomesForMonth)
router.get('/b_description', getBillsbyNamexMouth)
router.get('/i_description', getIncomesbyNamexMouth)
router.get('/currentbill', getCurrentBillsMonth)
router.get('/currentincome', getCurrentIncomesMonth)
router.get('/diferido', getCurrentDeferidoBills)
router.get('/pendiente', getCurrentPendingIncome)

//router.put('/:id', putBill);
//router.delete('/:id', deleteBill);

module.exports = router;
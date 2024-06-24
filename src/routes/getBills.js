const { Router } = require('express');
const {deleteBill, putBill, addBill, getBillsById, getAllBills, addBillForm} = require('../controllers/Inicio')
const router = Router();

router.get('/', getAllBills)
router.get('/:id', getBillsById)
router.post('/', addBill)
router.post('/bill', addBillForm)
router.put('/:id', putBill);
router.delete('/:id', deleteBill);

module.exports = router;
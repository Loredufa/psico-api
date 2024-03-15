const { Router } = require('express');
const {deleteBill, putBill, addBill, getBillsById, getAllBills} = require('../controllers/Inicio')
const router = Router();

router.get('/', getAllBills)
router.get('/:id', getBillsById)
router.post('/', addBill)
router.put('/:id', putBill);
router.delete('/:id', deleteBill);

module.exports = router;
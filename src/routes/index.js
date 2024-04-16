const { Router } = require('express');
const router = Router();
const verifyToken = require('../utils/middlewares/verifyToken');

const inicioRoute = require('./getBills');
const ingresosRoute = require('./getIncomes');
const detalleRoute = require('./getDetail');
const balanceRoute = require('./getBalance');
const AdminRoute = require('./getAdmin');




router.use('/bill', verifyToken, inicioRoute)
router.use('/income', verifyToken, ingresosRoute)
router.use('/detail', verifyToken, detalleRoute)
router.use('/balance', verifyToken, balanceRoute)
router.use('/admin', verifyToken, AdminRoute)




module.exports = router;
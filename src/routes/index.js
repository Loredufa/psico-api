const { Router } = require('express');
const router = Router();
const verifyToken = require('../utils/middlewares/verifyToken');

const inicioRoute = require('./getBills');
const ingresosRoute = require('./getIncomes');




router.use('/bill', verifyToken, inicioRoute)
router.use('/income', verifyToken, ingresosRoute)




module.exports = router;
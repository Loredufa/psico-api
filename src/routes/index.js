const { Router } = require('express');
const router = Router();
const verifyToken = require('../utils/middlewares/verifyToken');

const inicioRoute = require('./getBills');




router.use('/bill', verifyToken, inicioRoute)




module.exports = router;
const { Router } = require('express');
const {getInAll, getInById, addInc, deleteInc} = require('../controllers/Detalle_ingresos')
const {getBAll, getBById, addB, deleteB} = require('../controllers/Detalle_gastos')
const router = Router();

router.get('/i_detail', getInAll)
router.get('/b_detail', getBAll)

router.get('/i_detail/:id', getInById)
router.get('/b_detail/:id', getBById)

router.post('/i_post', addInc)
router.post('/b_post', addB)

router.delete('/i_detail/:id', deleteInc);
router.delete('/b_detail/:id', deleteB);

module.exports = router;
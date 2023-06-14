const express = require('express');

router = express.Router();

const orderController = require('../controllers/order-controller')
const authenticateMiddleware = require('../middlewares/authenticate')




// router.get('/admin',authenticateMiddleware,orderController.allOrder);
router.get('/user',authenticateMiddleware,orderController.userOrder);
router.get('/admin',authenticateMiddleware,orderController.adminOrder);


module.exports = router;    
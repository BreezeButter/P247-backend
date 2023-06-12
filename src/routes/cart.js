const express = require('express');
router = express.Router();

const cartController = require('../controllers/cart-controller')
const authenticateMiddleware = require('../middlewares/authenticate')




router.post('/del',authenticateMiddleware,cartController.del);
router.post('/add',authenticateMiddleware,cartController.addCart);
router.patch('/add/increment',authenticateMiddleware,cartController.increment);
router.patch('/add/decrement',authenticateMiddleware,cartController.decrement);
router.get('/all',authenticateMiddleware,cartController.allCart);


module.exports = router;    
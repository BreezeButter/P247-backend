const express = require('express');
const upload =require('../middlewares/upload')
router = express.Router();

const cartController = require('../controllers/cart-controller')
const authenticateMiddleware = require('../middlewares/authenticate')




router.post('/del',authenticateMiddleware,cartController.del);
router.post('/checkout',authenticateMiddleware,cartController.checkout);
router.post('/add',authenticateMiddleware,cartController.addCart);
router.patch('/add/increment',authenticateMiddleware,cartController.increment);
router.patch('/add/decrement',authenticateMiddleware,cartController.decrement);
router.get('/all',authenticateMiddleware,cartController.allCart);
router.post('/',upload.single('paymentUpload'),authenticateMiddleware,cartController.createPayment)



module.exports = router;    
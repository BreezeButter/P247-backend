const express = require('express');
router = express.Router();

const cartController = require('../controllers/cart-controller')
const authenticateMiddleware = require('../middlewares/authenticate')




router.post('/add',authenticateMiddleware,cartController.addCart);


module.exports = router;
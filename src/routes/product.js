const express = require('express');
router = express.Router();

const productController = require('../controllers/product-controller');


router.get('/dog/:id',productController.getDogId);
router.get('/dog',productController.getDog);
router.get('/cat',productController.getCat);


module.exports = router;
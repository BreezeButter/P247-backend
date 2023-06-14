const express = require('express');
const upload =require('../middlewares/upload')
router = express.Router();

const productController = require('../controllers/product-controller');


router.get('/dog/:id',productController.getDogId);
router.get('/cat/:id',productController.getCatId);
router.get('/dog',productController.getDog);
router.get('/cat',productController.getCat);
router.post('/build',upload.single('image1'),productController.createProduct);


module.exports = router;
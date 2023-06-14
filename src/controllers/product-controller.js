const { Product } = require("../models");
const uploadService = require("../services/upload-service")


exports.getDog = async (req, res, next) => {
    try {
      const product = await Product.findAll({ where: { petType: 'dog' } });
   
      res.json(product);

    } catch (err) {
      next(err);
    }
  };

exports.getDogId = async (req, res, next) => {
    try {
      const { id } = req.params

      const product = await Product.findOne({ where: { productId: id } });
    
      res.json(product);

    } catch (err) {
      next(err);
    }
  };
  
exports.getCatId = async (req, res, next) => {
    try {
      const { id } = req.params

      const product = await Product.findOne({ where: { productId: id } });
    
      res.json(product);

    } catch (err) {
      next(err);
    }
  };

exports.getCat = async (req, res, next) => {
    try {
      const product = await Product.findAll({ where: { petType: 'cat' } });
   
      res.json(product);

    } catch (err) {
      next(err);
    }
  };
exports.createProduct = async (req, res, next) => {
    try {
      const value = req.body
      const result = await uploadService.upload(req.file.path);
      value.image1 = result.secure_url;
      console.log("-------->",value)
      const product = await Product.create(value);
      res.status(200).json(product)
    } catch (err) {
      next(err);
    }
  };
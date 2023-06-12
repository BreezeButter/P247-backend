const { Product } = require("../models");


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

exports.getCat = async (req, res, next) => {
    try {
      const product = await Product.findAll({ where: { petType: 'cat' } });
   
      res.json(product);

    } catch (err) {
      next(err);
    }
  };
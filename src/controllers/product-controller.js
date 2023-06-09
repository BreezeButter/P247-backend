const { Product } = require("../models");


exports.getDog = async (req, res, next) => {
    try {
      const product = await Product.findAll({ where: { petType: 'dog' } });
      console.log(product)
      res.json(product);

    } catch (err) {
      next(err);
    }
  };
exports.getCat = async (req, res, next) => {
    try {
      const product = await Product.findAll({ where: { petType: 'cat' } });
      console.log(product)
      res.json(product);

    } catch (err) {
      next(err);
    }
  };
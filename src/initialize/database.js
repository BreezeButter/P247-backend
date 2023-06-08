const {sequelize, Product } = require('../models');

sequelize
  .sync({force: true})
  .then(() => {
    return Product.bulkCreate([
      {productName: 'catfood', brand: 'wiskas', price: 16, prodcuctType: 'food',foodType:'dry',petType:'cat',productWeight:1.6,petAge:1, detail:'for adult cat and indoor'},
      {productName: 'catfood', brand: 'wiskas', price: 16, prodcuctType: 'food',foodType:'wet',petType:'cat',productWeight:1.6,petAge:1, detail:'for adult cat and indoor'},
      {productName: 'catfood', brand: 'wiskas', price: 16, prodcuctType: 'food',foodType:'dry',petType:'cat',productWeight:1.6,petAge:1, detail:'for adult cat and indoor'},
      {productName: 'dogfood', brand: 'petdegree', price: 16, prodcuctType: 'food',foodType:'wet',petType:'dog',productWeight:1.6,petAge:1, detail:'for adult dog and indoor'},
      {productName: 'dogfood', brand: 'petdegree', price: 16, prodcuctType: 'food',foodType:'dry',petType:'dog',productWeight:1.6,petAge:1, detail:'for adult dog and indoor'},
      {productName: 'dogfood', brand: 'petdegree', price: 16, prodcuctType: 'food',foodType:'dry',petType:'dog',productWeight:1.6,petAge:1, detail:'for adult cdog and indoor'},
      {productName: 'catfood', brand: 'wiskas', price: 16, prodcuctType: 'food',foodType:'dry',petType:'cat',productWeight:1.6,petAge:1, detail:'for adult cat and indoor'},
    ])
  }).then(()=>process.exit(0))
  .catch((err) => console.log(err.message));
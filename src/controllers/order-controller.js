
const { OrderItem,Payment,Order,Product } = require("../models");
const order = require("../models/order");


exports.userOrder = async (req, res, next) => {
    try {
      const value = req.body;
      value.userId = req.user.userId;
      const orderAll = await OrderItem.findAll({
         where: { userId: value.userId } ,
         include: [
          { model: Product}
        ]
        });

        // const payment = await Payment.findAll({
        //   where: { userId: value.userId } ,
        //   include: [
        //    { model: Order }
        //  ] 
        //  })

      res.status(200).json(orderAll)
  
  
    } catch (err) {
      next(err);
    }
  
  
  };
  
exports.adminOrder = async (req, res, next) => {
    try {
      const value = req.body;
      value.userId = req.user.userId;
      const orderAll = await OrderItem.findAll({
         where: { userId: value.userId } ,
         include: [
          { model: Payment }]
        });
      res.status(200).json(orderAll)
  
  
    } catch (err) {
      next(err);
    }
  
  
  };
  
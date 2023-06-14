const { Op } = require('sequelize');
// const userService = require('../services/auth');
const { Cart,Product,Order,OrderItem,Payment } = require("../models");
const uploadService = require("../services/upload-service")

// const bcrypt = require('bcryptjs');
// const tokenService = require("../services/token-service");

exports.addCart = async (req, res, next) => {
  
  try {
    const value = req.body;
    value.userId = req.user.userId;
   
    const existingItem = await Cart.findOne({
      where: {
        [Op.and] : [
          {productId: value.productId},
          {userId: value.userId} 
        ]
      },
    });

    let check = !!existingItem;

    if (check) {
      const cart = await Cart.update({productAmount: existingItem.productAmount + 1},{
        where: {
          productId: existingItem.productId,
        },
      }

      );


      const cartAll = await Cart.findAll({
        where: { userId: value.userId } ,
        include: [
         { model: Product }]
       });
      res.status(200).json(cart);
    } else {
      const cart = await Cart.create(value);
      res.status(200).json(cart);
    }

  } catch (err) {
    next(err);
  }


};

exports.allCart = async (req, res, next) => {
  
  try {
    const value = req.body;
    value.userId = req.user.userId;
    const cartAll = await Cart.findAll({
       where: { userId: value.userId } ,
       include: [
        { model: Product }]
      });
    res.status(200).json(cartAll)


  } catch (err) {
    next(err);
  }


};

exports.increment = async (req, res, next) => {
  
  try {
    const value  = req.body;
    console.log(value)
  
    value.userId = req.user.userId;

    const existingItem = await Cart.findOne({
      where: {
        [Op.and] : [
          {productId: value.productId},
          {userId: value.userId} 
        ]
      },
    })


    const cart = await Cart.update({productAmount: existingItem.productAmount +1 },{
      where: {
        productId: existingItem.productId,
      },
    }
)


    const cartAll = await Cart.findAll({
       where: { userId: value.userId } ,
       include: [
        { model: Product }]
      });

    res.status(200).json(cartAll)


  } catch (err) {
    next(err);
  }

};


exports.decrement = async (req, res, next) => {
  
  try {
    const value  = req.body;

    value.userId = req.user.userId;

    const existingItem = await Cart.findOne({
      where: {
        [Op.and] : [
          {productId: value.productId},
          {userId: value.userId} 
        ]
      },
    })

    if(existingItem.productAmount>1){

      const cart = await Cart.update({productAmount: existingItem.productAmount - 1 },{
        where: {
          productId: existingItem.productId,
        },
      }
  )
    }



    

    const cartAll = await Cart.findAll({
       where: { userId: value.userId } ,
       include: [
        { model: Product }]
      });

    res.status(200).json(cartAll)


  } catch (err) {
    next(err);
  }

};


exports.del = async (req, res, next) => {
  
  try {
    const value  = req.body;

    value.userId = req.user.userId;


    const existingItem = await Cart.findOne({
      where: {
        [Op.and] : [
          {productId: value.productId},
          {userId: value.userId} 
        ]
      },
    })
  

    const cart = await Cart.destroy({
      where: {
        productId: existingItem.productId
      }
    })
    
  

    const cartAll = await Cart.findAll({
       where: { userId: value.userId } ,
       include: [
        { model: Product }]
      });

    res.status(200).json(cartAll)


  } catch (err) {
    next(err);
  }

};



exports.checkout = async (req, res, next) => {
  
  try {
    const value  = req.body;
    console.log(value)
    value.userId = req.user.userId;
    console.log('value',value)

    const existingItem = await Cart.findAll({
      where: {userId: value.userId} 
    })
      const modify = JSON.parse(JSON.stringify(existingItem))

      const { orderId }  = await Order.create()

     const rs =  modify.map( el => {
      delete el.cartId
      el['orderId'] = orderId  
      return el
    } )

    const rs1 = await modify.map( el => OrderItem.create(el))

    const delCart = await Cart.destroy({
      where: {userId: value.userId} 
    })


    res.status(200).json({orderId:orderId})

  } catch (err) {
    next(err);
  }

};



exports.createPayment = async (req, res, next) => {
  
  try {


    const value  = req.body;
    console.log('first', value)
    console.log('---------------------------------------',req.file)
    const result = await uploadService.upload(req.file.path);
    value.image = result.secure_url;
    value.userId = req.user.userId;
    const payment = await Payment.create(value)
    console.log('########',value)
   


    res.status(200).json(payment)

  } catch (err) {
    next(err);
  }

};



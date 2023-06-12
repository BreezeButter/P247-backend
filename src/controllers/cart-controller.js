const { Op } = require('sequelize');
// const userService = require('../services/auth');
const { Cart,Product } = require("../models");

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


    const cart = await Cart.update({productAmount: existingItem.productAmount - 1 },{
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
exports.del = async (req, res, next) => {
  
  try {
    const value  = req.body;
    console.log("$$$$$$$$$$$$$$$$$$$$$$$1",value)
    value.userId = req.user.userId;
    console.log("$$$$$$$$$$$$$$$$$$$$$$$2",value)

    const existingItem = await Cart.findOne({
      where: {
        [Op.and] : [
          {productId: value.productId},
          {userId: value.userId} 
        ]
      },
    })
    console.log('existingItem #########',existingItem)

    const cart = await Cart.destroy({
      where: {
        productId: existingItem.productId
      }
    })
    
    console.log('CART#########',cart)

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
// const { Op } = require('sequelize');
// const userService = require('../services/auth');
const { Cart } = require("../models");
// const bcrypt = require('bcryptjs');
// const tokenService = require("../services/token-service");

exports.addCart = async (req, res, next) => {
  try {
    const value = req.body;
    value.userId = req.user.userId
    console.log('V',value)
    const cart = await Cart.create(value);
    // const accessToken = tokenService.sign({ id: user.id });
    // res.status(200).json({ accessToken });
  
  } catch (err) {
    next(err);
  }
};


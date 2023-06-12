// const { Op } = require('sequelize');
// const userService = require('../services/auth');
const { User } = require("../models");
// const bcrypt = require('bcryptjs');
const tokenService = require("../services/token-service");

exports.register = async (req, res, next) => {
  try {
    const value = req.body;
    const user = await User.create(value);
   
    const accessToken = tokenService.sign({ id: user.id });
    res.status(200).json({ accessToken });
  
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const value = req.body;
    const { email, passWord } = value;

    const user = await User.findOne({
      where: { email: email },
    });

    const isCorrect = user.passWord == passWord;

    if (isCorrect) {
        const accessToken = tokenService.sign({ id: user.userId });
   
        res.status(200).json({ accessToken });
    } else res.json({ msg: "login-not success" });
  } catch (err) {
    next(err);
  }
};

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};





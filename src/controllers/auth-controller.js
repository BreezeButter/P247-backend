// const { Op } = require('sequelize');
// const userService = require('../services/auth');
const { User } = require("../models");
// const bcrypt = require('bcryptjs');
const tokenService = require("../services/token-service");

exports.register = async (req, res, next) => {
  try {
    const value = req.body;
    const user = await User.create(value);
    // res.json(user);
    const accessToken = tokenService.sign({ id: user.id });
    res.status(200).json({ accessToken });
    // console.log('####',req.body)
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const value = req.body;
    const { email, passWord } = value;
    // console.log('password###', passWord)
    // console.log('email##', email)
    const user = await User.findOne({
      where: { email: email },
    });
    // if(!user){
    //     createError('No this user', 400);
    // }
    const isCorrect = user.passWord == passWord;
    // console.log('user.passWord',user.passWord)
    // console.log('user',user)
    // console.log(isCorrect)

    if (isCorrect) {
      res.json({ msg: "login" });
    } else res.json({ msg: "login-not success" });
  } catch (err) {
    next(err);
  }
};

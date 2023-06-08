const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.sign = payload => 
     jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_IN
  });

exports.verify = token => jwt.verify(token, process.env.JWT_SECRET_KEY);

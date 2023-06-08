const { User } = require('../models');

exports.createUser = user => User.create(user)

exports.getUserById = id => User.findByPk(id);
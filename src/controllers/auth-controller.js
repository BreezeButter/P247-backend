
// const userService = require('../services/auth');
const { User } = require('../models');



exports.register =  (req,res,next) => {
    const value = req.body
    const user = User.create(value)
    res.json(user) 
    // console.log('####',req.body)
}

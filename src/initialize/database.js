
const { sequelize } = require('../models');


sequelize.sync({force:true})
console.log("Sync Success");
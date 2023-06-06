
module.exports = (sequelize, DataTypes) => {
    const  Shipping  = sequelize.define("Shipping", {
        shippingId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }, 
      deliveryStatus : {
       type: DataTypes.ENUM('delivery','deliverySuccess','reject'),
       allowNull: false,
       validate: {
         notEmpty: true,
       },
      departure : DataTypes.DATETIME,
      arrived : DataTypes.DATETIME,
}},
{
    underscored: true
}
 )

 Shipping.associate = models => {

  Shipping.belongsTo(models.Order, {
      foreignKey: {
        name: 'orderId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });


  };
    return Shipping;
  };
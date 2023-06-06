
//// ###### MODEL  : USER #######/////

module.exports = (sequelize, DataTypes) => {
    const Order  = sequelize.define("Order", {
      orderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }, productAmount : DataTypes.INTEGER,
         oerderStatus : {
          type: DataTypes.ENUM('inCart','paymentSuccess','delivery','deliverySuccess','reject')
        }
},
{
    underscored: true
}
 )

 Order.associate = models => {

  Order.hasMany(models.OrderItem, {
      foreignKey: {
        name: 'orederId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });

  
  };
    return Order;
  };
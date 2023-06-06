
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
          type: DataTypes.ENUM('inCart','paymentSuccess','delivery','deliverySuccess','reject'),
          allowNull: false,
          validate: {
            notEmpty: true,
          },
        }
},
{
    underscored: true
}
 )

 Order.associate = models => {

  Order.hasMany(models.OrderItem, {
      foreignKey: {
        name: 'orderId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });

    Order.hasOne(models.Shipping, {
      foreignKey: {
        name: 'orderId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });

    Order.hasOne(models.Payment, {
      foreignKey: {
        name: 'orderId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });

  
  };
    return Order;
  };
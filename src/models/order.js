
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
      }, 
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
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    Order.hasOne(models.Shipping, {
      foreignKey: {
        name: 'orderId',
        allowNull: false
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    Order.hasOne(models.Payment, {
      foreignKey: {
        name: 'orderId',
        allowNull: false
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

  
  };
    return Order;
  };
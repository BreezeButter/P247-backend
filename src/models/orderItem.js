
//// ###### MODEL  : USER #######/////

module.exports = (sequelize, DataTypes) => {
    const OrderItem  = sequelize.define("OrderItem", {
      orderItemId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }, productAmount : DataTypes.INTEGER,
 
},
{
    underscored: true
}
 )

 OrderItem.associate = models => {

  OrderItem.belongsTo(models.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });

    OrderItem.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      
    OrderItem.belongsTo(models.Order, {
      foreignKey: {
        name: 'orederId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });
    OrderItem.belongsTo(models.DeliveryType, {
      foreignKey: {
        name: 'deliveryTypeId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });
      
  };
    return OrderItem;
  };
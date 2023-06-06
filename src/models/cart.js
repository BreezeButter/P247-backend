
//// ###### MODEL  : USER #######/////

module.exports = (sequelize, DataTypes) => {
    const Cart  = sequelize.define("Cart", {
      cartId: {
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

Cart.associate = models => {

    Cart.belongsTo(models.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });

    Cart.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      Cart.belongsTo(models.DeliveryType, {
        foreignKey: {
          name: 'deliveryTypeId',
          allowNull: false
        },
        onDelete: 'RESTRICT'
      });
  };
    return Cart;
  };
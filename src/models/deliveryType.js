
module.exports = (sequelize, DataTypes) => {
    const  DeliveryType  = sequelize.define("DeliveryType", {
        deliveryTypeId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }, priceType : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      price : {
        type: DataTypes.INTEGER,
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

 DeliveryType.associate = models => {

    DeliveryType.hasMany(models.Cart, {
      foreignKey: {
        name: 'deliveryTypeId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });
    DeliveryType.hasMany(models.OrderItem, {
      foreignKey: {
        name: 'deliveryTypeId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });
  };
    return DeliveryType;
  };
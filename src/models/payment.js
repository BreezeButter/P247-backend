
module.exports = (sequelize, DataTypes) => {
    const  Payment  = sequelize.define("Payment", {
        PaymentId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },},
{
    underscored: true
}
 )

 Payment.associate = models => {

    Payment.belongsTo(models.Order, {
      foreignKey: {
        name: 'orderId',
        allowNull: false
      },
      onDelete: 'RESTRICT'
    });

  };
    return Payment;
  };
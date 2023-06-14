//// ###### MODEL  : USER #######/////

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
      productId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      }, 
      productType:  DataTypes.ENUM('food', 'toy'),
      foodType:  DataTypes.ENUM('dry', 'wet'),
      petType:  DataTypes.STRING(100),
      productWeight: DataTypes.INTEGER,
      petAge: DataTypes.INTEGER,
      detail: DataTypes.TEXT,
      image1: DataTypes.STRING,
      image2: DataTypes.STRING,
    },{
      underscored: true
    }
    );
    Product.associate = models => {

      Product.hasMany(models.Cart, {
        foreignKey: {
          name: 'productId',
          allowNull: false
        },
        onDelete: 'RESTRICT',
      });
      Product.hasMany(models.OrderItem, {
        foreignKey: {
          name: 'productId',
          allowNull: false
        },
        onDelete: 'RESTRICT',
      });
      
    };
    return Product;
  };
  
  
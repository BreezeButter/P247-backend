//// ###### MODEL  : USER #######/////

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    passWord: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    mobile: {
      type: DataTypes.STRING(22),
      unique: true,
      validate: {
        is: /^[0-9]{10}$/,
      },
    },    
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
     },
    profileImage: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    postcode: DataTypes.INTEGER,
  },{
    underscored: true
  }
  );
  User.associate = models => {

    User.hasMany(models.Cart, {
      foreignKey: {
        name: 'UserId',
        allowNull: false
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

 
  };
  return User;
};



//// ###### MODEL  : USER #######/////

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      notEmpty: {
        args: true,
        msg: "code cannot be empty"
     }
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: {
        args: true,
        msg: "code cannot be empty"
     }
    },
    passWord: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: {
        args: true,
        msg: "code cannot be empty"
     }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: {
        args: true,
        msg: "code cannot be empty"
     }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: {
        args: true,
        msg: "code cannot be empty"
     }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      notEmpty: {
        args: true,
        msg: "code cannot be empty"
     }
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
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

 
  };
  return User;
};



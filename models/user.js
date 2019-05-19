module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: {
      text: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    firebase_id: {
      text: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Hunt);
  };

  return User;
};
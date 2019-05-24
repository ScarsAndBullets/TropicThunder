module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8]
      }
    },
    firebaseId: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '12345678',
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
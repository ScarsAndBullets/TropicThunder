module.exports = function (sequelize, DataTypes) {
  var Hunt = sequelize.define("Hunt", {
    hunt_name: {
      text: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    hunt_type: {
      text: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Hunt.associate = function (models) {
    Hunt.belongsTo(models.User);
    Hunt.hasMany(models.Stop);
  };

  return Hunt;
};
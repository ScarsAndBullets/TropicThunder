module.exports = function (sequelize, DataTypes) {
  var Hunt = sequelize.define("Hunt", {
    huntName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    huntType: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   len: [1]
      // }
    }
  });

  Hunt.associate = function (models) {
    Hunt.belongsTo(models.User);
    Hunt.hasMany(models.Stop);
  };

  return Hunt;
};


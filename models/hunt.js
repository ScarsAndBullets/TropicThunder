module.exports = function (sequelize, DataTypes) {
  var Hunt = sequelize.define("Hunt", {
    huntCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Hunt.associate = function (models) {
    Hunt.hasMany(models.Question);
  };

  return Hunt;
};


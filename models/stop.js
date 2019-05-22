module.exports = function (sequelize, DataTypes) {
  var Stop = sequelize.define("Stop", {
    stopType: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    huntType: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    stopName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    clue: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    geolocation: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    qrCode: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Stop.associate = function (models) {
    Stop.belongsTo(models.Hunt);
  };

  return Stop;
};

module.exports = function (sequelize, DataTypes) {
  var Stop = sequelize.define("Stop", {
    stopType: {
      type: DataTypes.STRING,
      allowNull: true,
      // len: [1]
    },
    huntType: {
      type: DataTypes.STRING,
      allowNull: true,
      // len: [1]
    },
    stopName: {
      type: DataTypes.STRING,
      allowNull: true,
      // len: [1]
    },
    clue: {
      type: DataTypes.STRING,
      allowNull: true,
      // len: [1]
    },
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: true,
      // len: [1]
    },
    geolocation: {
      type: DataTypes.STRING,
      allowNull: true,
      // len: [1]
    },
    qrCode: {
      type: DataTypes.STRING,
      allowNull: true,
      // len: [1]
    }
  });

  return Stop;
};
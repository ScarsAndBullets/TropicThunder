module.exports = function (sequelize, DataTypes) {
  var Stops = sequelize.define("Stops", {
    stop_type: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    hunt_type: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    stop_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    clue: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    correct_answer: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    geolocation: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    qr_code: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Stops.associate = function (models) {
    Stops.belongsTo(models.Hunts);
  };

  return Stops;
};

module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    clue: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  Question.associate = function (models) {
    Question.hasMany(models.Answer);
  };
  return Question;
};

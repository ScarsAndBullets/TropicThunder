module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    clue: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  Question.associate = function (models) {
    Question.hasMany(models.Answer);
  };
  return Question;
};

module.exports = function (sequelize, DataTypes) {
  var Answer = sequelize.define("Answer", {
    correctAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wrongAnswerOne: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wrongAnswerTwo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    wrongAnswerThree: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  return Answer;
};

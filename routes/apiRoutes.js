var db = require("../models");

module.exports = function (app) {
  // Get all Hunts
  app.get("/api/hunts", function (req, res) {
    db.Hunt.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  //Get a specific Hunt by huntCode
  app.get("/api/hunts/:huntCode", function (req, res) {
    db.Hunt.findOne({
      where: {
        huntCode: req.params.huntCode
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  // Create a new hunt
  app.post("/api/hunts", function (req, res) {
    db.Hunt.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  // Delete an Hunt by id
  app.delete("/api/hunt/:id", function (req, res) {
    db.Hunt.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/questions", function (req, res) {
    db.Question.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/question/:huntId", function (req, res) {
    db.Question.findOne({
      where: {
        HuntId: req.params.huntId
      }
    }).then(function (data) {
      res.json(data);
    });
  });
};
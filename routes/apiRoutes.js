var db = require("../models");

module.exports = function (app) {
  // Get all Hunts
  app.get("/api/hunt", function (req, res) {
    db.Hunt.findAll({}).then(function (dbhunt) {
      res.json(dbhunt);
    });
  });

  // Create a new Hunt
  app.post("/api/hunt", function (req, res) {
    db.Hunt.create(req.body).then(function (dbhunt) {
      res.json(dbhunt);
    });
  });

  // Delete an Hunt by id
  app.delete("/api/hunt/:id", function (req, res) {
    db.Hunt.destroy({ where: { id: req.params.id } }).then(function (dbhunt) {
      res.json(dbhunt);
    });
  });
};

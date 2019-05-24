// Dependencies
//==========================================================

// Requiring our Hunt model
var db = require("../models");

//Routes
// =========================================================
module.exports = function (app) {
  // Get all hunts
  app.get("/api/hunts/", function (req, res) {
    db.Hunt.findAll({}).then(function (dbHunt) {
      res.json(dbHunt);
    });
  });

  // Get route for returning stops to a specific hunt
  app.get("/api/posts/stop/:stop", function (req, res) {
    db.Hunt.findAll({
      where: {
        stop: req.params.stop
      }
    }).then(function (dbStop) {
      res.json(dbStop);
    });
  });

  // Get route for returning a single stop
  app.get("/api/stop/:id", function (req, res) {
    db.Hunt.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbStop) {
      res.json(dbStop);
    });
  });

  // Create a new hunt
  app.post("/api/hunts/", function (req, res) {
    console.log(req.body);
    db.Hunt.create({
      name: req.body.name,
      type: req.body.type
    }).then(function (dbHunt) {
      res.json(dbHunt);
    });
  });

  // Delete an example by id
  app.delete("/api/hunts/:id", function (req, res) {
    db.Hunt.destroy({ where: { id: req.params.id } }).then(function (dbHunt) {
      res.json(dbHunt);
    });
  });
};


// var db = require("../models");

// module.exports = function(app) {
//   // Get all examples
//   app.get("/api/examples", function(req, res) {
//     db.Example.findAll({}).then(function(dbExamples) {
//       res.json(dbExamples);
//     });
//   });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };

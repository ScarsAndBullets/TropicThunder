var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  // Load create hunt page
  app.get("/createHunt/", function (req, res) {
    res.render("createhunt");
  });

  app.get("/play", function (req, res) {
    res.render("play");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
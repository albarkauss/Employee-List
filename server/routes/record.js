const express = require("express");

// recordRoutes is an instance of the express router, used to define our routes
// The router will take control of requests starting with path /record
const recordRoutes = express.Router();

// Connects to the database
const dbo = require("../db/connection");

// Converts the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// Gets a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("employees-details")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// Creates a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    gender: req.body.gender,
  };
  db_connect
    .collection("employees-details")
    .insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
});

module.exports = recordRoutes;

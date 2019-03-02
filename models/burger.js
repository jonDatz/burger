// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burgerName, cb) {
    orm.insertOne("burgers", burgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(devoured, id, cb) {
    orm.updateOne("burgers", devoured, id, function(res) {
      cb(res);
    });
  },
  deleteOne: function(id, cb) {
    orm.deleteOne("burgers", id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;

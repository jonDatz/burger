const connection = require("./connection.js")

var orm = {

  // selectAll

  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
      console.log(res);

    });
  },

  // insertOne

  insertOne: function ()





  // updateOne




}

module.exports = orm;
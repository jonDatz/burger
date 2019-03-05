const connection = require("./connection.js")

var orm = {

  // selectAll

  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM ??;";

    connection.query(queryString, [tableInput], function (err, res) {
      if (err) throw err;

      cb(res);
      console.log(res);

    });
  },

  // insertOne

  insertOne: function (tableInput, burgerName, cb) {
    var queryString = "INSERT INTO ?? VALUES ?;";
    connection.query(queryString, {
      burgers: tableInput,
      burger_name: burgerName,
      devoured: false,
    }, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
      console.log(res);
    });
  },

  // updateOne

  updateOne: function (tableInput, devoured, id, cb) {
    var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
    connection.query(queryString, [tableInput, devoured, id], function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
      console.log(res + " updated");

    });

  },

  deleteOne: function (tableInput, id, cb) {
    var queryString = "DELETE FROM ?? WHERE id = ?";
    connection.query(queryString, [tableInput, id], function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
      console.log(result + "deleted");
    });
  }
}

module.exports = orm;
const sql = require("./db.config.js");

// constructor
const User = function(user) {
  this.userName = user.userName;
  this.password = user.password;
  this.lastName = user.lastName;
};

User.getAll = (result) => {
    let query = "SELECT * FROM users";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("tutorials: ", res);
      result(null, res);
    });
  };
  module.exports= User ;
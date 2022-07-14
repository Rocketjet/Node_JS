var db = require("./dbConnection");
console.log(db);
var cn = new db();
console.log(cn);
cn.connect();

const mysql = require('mysql');
exports.db = mysql.createConnection({
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME
});

exports.query = (...args) => {
  return new Promise((resolve, reject) => {
    this.db.query(...args, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

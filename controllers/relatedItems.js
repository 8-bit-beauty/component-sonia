// require("../database/index.js"); // MySql
const client = require("../database/postgreSQL.js"); // postgreSQL
// const client = require("../database/cassandra.js"); //cassandraDB

module.exports = {
  //	======= Cassandra DB
  fetch: (req, res) => {
    const id = req.params.id;
    client.query(
      `select * from products INNER JOIN similar_products on similar_products.product_id = products.id where similar_products.product_id=${id}`,
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          // console.log({ results });
          res.json(results.rows);
        }
      }
    );
    // === Cassandra
    // client.execute(
    //   select * from products where id in (select related_id from similar_products where product_id=${id})`,
    //   (err, results) => {
    //     if (err) return console.log(err);
    //     res.json(results.rows);
    //   }
    // );
  }
};

// require("../database/index.js"); // MySql
const client = require("../database/postgreSQL.js"); // postgreSQL
// const client = require("../database/cassandra.js"); //cassandraDB
const redisConnection = require("../server/redis.js");
module.exports = {
    //	======= Cassandra DB
    fetch: (req, res) => {
        const id = req.params.id;
        client.query(
            `SELECT * FROM products INNER JOIN similar_products ON similar_products.related_id = products.id WHERE similar_products.product_id = ${id}`,
            (err, results) => {
                if (err) return console.log(err);
                redisConnection.setex(id, 120000, JSON.stringify(results.rows))
                res.json(results.rows);
            }
        );
    },

    createItem: (req, res) => {
        const data = Object.assign({ reviewNumber: 0, rating: 0 }, req.body);
        const queryString = `INSERT INTO products (product_name, product_description, color, price, image_url, rating, review_number, is_prime)
    VALUES ('${data['product_name']}', '${data['product_description']}', '${
            data['color']
            }', '${data['price']}', '${data['image_url']}', ${data['rating']}, ${
            data['review_number']
            }, ${data['is_prime']})`;
        client.query(queryString, (err, results) => {
            if (err) return console.log(err);
            res.send(results);
        });
    },

    destroyItem: (req, res) => {
        const id = req.body.id;
        const queryString = `DELETE FROM products WHERE id = ${id}`;
        client.query(queryString, (err, results) => {
            if (err) return console.log(err);
            console.log(results)
        });
    },

    updateItem: (req, res) => {
        const data = req.body;
        const id = req.body.id;
        var queryString = `UPDATE products SET product_name='${
            data['product_name']
            }', product_description='${data['product_description']}'
      WHERE id=${id}`;
        client.query(queryString, (err, results) => {
            if (err) return console.log(err);
            console.log(results)
        });
    }
};

// === Cassandra
// client.execute(
//   select * from products where id in (select related_id from similar_products where product_id=${id})`,
//   (err, results) => {
//     if (err) return console.log(err);
//     res.json(results.rows);
//   }
// );

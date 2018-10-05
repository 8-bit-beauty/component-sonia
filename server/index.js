require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("../routes/relatedItems.js");
app.use(cors());
app.use(bodyParser.json());
bodyParser.urlencoded({ extended: true });
app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});
// const cassandra = require("../database/cassandra.js");
// cassandra.connect(function(err) {
//   if (err) return console.error(err);
//   console.log("Connected cassandra");
// });

const postgres = require("../database/postgreSQL.js");
postgres.connect(function(err) {
  if (err) return console.log(err);
  console.log("postgres connected");
});

app.use("/:id", express.static(`${__dirname}/../client/dist`));
app.use("/product", routes);

// ======== MySQL
// app.get("/product", (req, res) => {
//   controllers.getRelated(req.query.id, (err, results) => {
//     if (err) {
//       res.status(503).send(err);
//     } else {
//       return res.json({
//         data: results
//       });
//     }
//   });
// });

// app.delete("/product", bodyParser(), (req, res) => {
//   controllers.destroyItem(req.body.id);
// });

// app.post("/product", bodyParser(), (req, res) => {
//   var data = Object.assign({ reviewNumber: 0, rating: 0 }, req.body);
//   controllers.createItem(data, (err, results) => {
//     if (err) {
//       console.log(err);
//     } else {
//       controllers.insertRelated((err, results) => {
//         if (err) return console.log(err);
//         console.log(results);
//       });
//     }
//   });
// });

// app.put("/product", bodyParser(), (req, res) => {
//   controllers.updateItem(req.body);
//   res.json("updated bro");
// });

const PORT = process.env.PORT || 4043;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});

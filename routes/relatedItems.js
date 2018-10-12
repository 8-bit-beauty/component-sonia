const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/relatedItems.js");
const client = require("../server/redis.js");

function cache(req, res, next) {
  const org = req.params.id;
  client.get(org, function(err, data) {
    if (err) throw err;
    if (data != null) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
}

router.get("/:id", cache, ctrl.fetch);
router.post("/", ctrl.createItem);
router.delete("/:id", ctrl.destroyItem);
router.put("/:id", ctrl.updateItem);

module.exports = router;

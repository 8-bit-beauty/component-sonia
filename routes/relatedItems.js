const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/relatedItems.js");

router.get("/:id", ctrl.fetch);

module.exports = router;

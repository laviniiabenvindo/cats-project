const express = require("express");
const router = express.Router();

const PublicationController = require("../controllers/PublicationController");

router.get("/", PublicationController.showPublication);

module.exports = router;

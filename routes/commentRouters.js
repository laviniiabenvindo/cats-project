const express = require("express");
const router = express.Router();

const CommentsController = require("../controllers/CommentsController");

router.post("/comment", CommentsController.comments);

module.exports = router;
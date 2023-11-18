const express = require("express");
const router = express.Router();

const LikesController = require("../controllers/LikeController");

router.post("/like", LikesController.likePost);

module.exports = router;

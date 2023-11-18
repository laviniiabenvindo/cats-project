const express = require("express");
const router = express.Router();

const RouterController = require("../controllers/AuthController");

router.post("/login", RouterController.loginPost);
router.post("/registrar", RouterController.registerPost);
router.get("/logout", RouterController.logout);

module.exports = router;

const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/", HomeController.getAll);
router.post("/", HomeController.post);

module.exports = router;

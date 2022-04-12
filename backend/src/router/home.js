const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/HomeController");

router.get("/:id", HomeController.getAllSites);
router.post("/", HomeController.post);

module.exports = router;

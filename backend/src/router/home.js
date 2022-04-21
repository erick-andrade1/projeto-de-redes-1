//Aqui usamos o express para fazer o controle de rotas
const express = require("express");

//chamamos o roteador do express
const router = express.Router();

//Aqui chamamos o controlador da nossa aplicação, responsável por fazer a chamada ao repositório
const HomeController = require("../controllers/HomeController");

//Rotas criadas:
router.get("/:id", HomeController.getAllSites);
router.post("/", HomeController.post);

//Exportação das rotas
module.exports = router;

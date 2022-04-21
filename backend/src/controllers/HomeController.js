const HomeRepository = require("../repositories/HomeRepository");

//Nosso controlador fazer as chamadas e requisições necessárias
module.exports = class HomeController {

  //Método de chamar os sites curtidos pelo usuário
  static async getAllSites(req, res) {
    try {
      const obj = await HomeRepository.getAllSites(req.params.id);
      res.send(obj);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
  
  //Método responsável por postar as mensagens que o usuários digitou
  static async post(req, res) {
    if (req.body) {
      try {
        const body = req.body;
        res.send(body);
      } catch (error) {
        res.status(500).json({ error: error });
      }
    } else {
      res.status(500).json({ error: error });
    }
  }
};

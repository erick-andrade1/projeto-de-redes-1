const HomeRepository = require('../repositories/HomeRepository');

module.exports = class HomeController {
  static async getAllSites(req, res) {
    try {
      const obj = await HomeRepository.getAllSites(req.params.id);
      res.send(obj);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
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

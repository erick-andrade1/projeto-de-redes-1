module.exports = class HomeController {
  static async getAll(req, res) {
    try {
      const json = '{"result":true, "count":42}';
      const obj = JSON.parse(json);
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

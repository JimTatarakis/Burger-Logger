// Dependencies
// =============================================================
// Sets up the Models
// =============================================================
const db = require('../../models');

// Routes
// =============================================================
module.exports = function (app) {

  // GET route
  app.get("/api/burgers", function (req, res) {
    db.Burgers.findAll({}).then(() => {
      res.json({ get: true });
    });

  });

  // GET route for not eaten burgers
  app.get("/api/burgers/noteaten", function (req, res) {
    db.Burgers.findAll({where:{ eaten:false }}).then((data) => {
      res.json({data});
    });

  });

  // POST route
  app.post("/api/burgers", function (req, res) {
    db.Burgers.create({
      name: req.body.name,
      eaten: false
    }).then(() => {
      res.json({ post: true });
    });

  });

  // DELETE route
  app.delete("/api/burgers/eaten", function (req, res) {
    db.Burgers.destroy({
      where: {
        eaten: true
      }
    })
      .then(() => {
        res.json({ delete: true });
      });

  });

  // PUT route
  app.put("/api/burgers", (req, res) => {
    db.Burgers.update({
      eaten: req.body.eaten
    }, {
        where: {
          id: req.body.id
        }
      })
      .then(() => {
        console.log('this is working!');
        res.json({ update: true });
      });

  });
};
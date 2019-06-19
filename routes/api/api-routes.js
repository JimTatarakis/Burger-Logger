// Dependencies
// =============================================================
// Sets up the Models
// =============================================================
const db = require('./models');

// Routes
// =============================================================
module.exports = function(app) {

    // GET route
    app.get("/api/Burgers", function(req, res) {
      db.Burgers.findAll({}).then(function(dbBurger) {
        res.json(dbBurger);
      });
  
    });
  
    // POST route
    app.post("/api/Burgers", function(req, res) {
      db.Burgers.create({
        name: req.body.name,
        eaten: req.body.eaten
      }).then(function(dbBurger) {
        res.json(dbBurger);
      });
  
    });
  
    // DELETE route
    app.delete("/api/Burgers/:id", function(req, res) {
      db.Burgers.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbTodo) {
          res.json(dbTodo);
        });
  
    });
  
    // PUT route
    app.put("/api/Burgers", function(req, res) {
      db.Burgers.update({
        name: req.body.name,
        eaten: req.body.eaten
      }, {
        where: {
          id: req.body.id
        }
      })
        .then(function(dbTodo) {
          res.json(dbTodo);
        });
  
    });
  };
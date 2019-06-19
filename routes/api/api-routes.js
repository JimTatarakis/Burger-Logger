// Dependencies
// =============================================================
// Sets up the Models
// =============================================================
const db = require('../../models');

// Routes
// =============================================================
module.exports = function(app) {

    // GET route
    app.get("/api/burgers", function(req, res) {
      db.Burgers.findAll({}).then( () => {
        res.json({get:true});
      });
  
    });
  
    // POST route
    app.post("/api/burgers", function(req, res) {
      db.Burgers.create({
        name: req.body.name,
        eaten: false
      }).then( () => {
        res.json({post:true});
      });
  
    });
  
    // DELETE route
    app.delete("/api/Burgers/:id", function(req, res) {
      db.Burgers.destroy({
        where: {
          id: req.params.id
        }
      })
        .then( () => {
          res.json({delete:true});
        });
  
    });
  
    // PUT route
    app.put("/api/Burgers", (req,res) => {
      db.Burgers.update({
        name: req.body.name,
        eaten: req.body.eaten
      }, {
        where: {
          id: req.body.id
        }
      })
        .then( () => {
          res.json({update:true});
        });
  
    });
  };
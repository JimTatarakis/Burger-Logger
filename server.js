// Dependencies
// =============================================================
const express = require('express');
const exhbs = require('express-handlebars');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Models
// =============================================================
const db = require('./models');

// Sets up Static Folder
// =============================================================
app.use(express.static('public'));

// Requires the Routes
// =============================================================
require('./routes/api/api-routes.js')(app);
require('./routes/views/views-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
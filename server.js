const express = require('express');
const app = express();
const bodyParser =  require("body-parser");
const db = require('./models');

const PORT = process.env.PORT || 4000;

const routes = require('./routes');
// Middleware

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Project Wayfarer</h1>')
});

// Api Route
app.use('/api/v1', routes.api);

// Server start
app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}`));
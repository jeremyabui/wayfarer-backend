const express = require("express");
const app = express();
const db = require('./models');

const PORT = process.env.PORT || 4000;

const routes = require('./routes');
// Middleware

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Project Wayfarer</h1>')
});

// Api Route
// app.use('/api/v1', routes.api);

// Server start
app.listen(PORT, () =>
  console.log(`Server connected at http://localhost:${PORT}`)
);

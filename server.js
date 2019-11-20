const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;
// Middleware


// Routes

// Server start
app.listen(PORT, () => console.log(`Server connected at http://localhost:${PORT}`));
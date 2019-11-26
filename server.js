const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const multer = require('multer');

require("dotenv").config();
const PORT = process.env.PORT;

const routes = require("./routes");

//------- Middleware -------//

// CORS
const corsOptions = {
  origin: ["https://wayfarer-damnbros.herokuapp.com"],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Session
app.use(
  session({
    store: new MongoStore({ url: process.env.MONGODB_URI }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//------- Routes -------//
app.get("/", (req, res) => {
  res.send("<h1>Project Wayfarer</h1>");
});

// Api Route
app.use("/api/v1", routes.api);
app.use("/api/v1/auth", routes.auth);

// Server start
app.listen(process.env.PORT || 4000, () => console.log(`Server connected at http://localhost:${PORT}`))

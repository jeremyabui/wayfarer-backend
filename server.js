const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const multer = require('multer');
const db = require("./models");

require("dotenv").config();
const PORT = process.env.PORT;

const routes = require("./routes");

//------- Middleware -------//

// CORS
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Session
app.use(
  session({
    store: new MongoStore({ url: process.env.MONGO_URI }),
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

// Multer
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

let upload = multer({ storage: storage }).single('file')

app.post('/upload', function(req, res) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)
  })
});

// Server start
app.listen(PORT, () =>
  console.log(`Server connected at http://localhost:${PORT}`)
);

const db = require("../models");

// Index
const index = (req, res) => {
  db.City.find({}, (err, allCities) => {
    if (err) return console.log(err);
    res.json({
      status: 200,
      msg: "Show all cities",
      requestedAt: new Date().toLocaleString(),
      count: allCities.length,
      data: allCities
    });
  });
};

const create = (req, res) => {
  db.City.create(req.body, (err, createdCity) => {
    if (err) return console.log(err);
    res.json({
      status: 201,
      message: "Created new city",
      requestedAt: new Date().toLocaleString(),
      data: createdCity
    });
  });
};

const show = (req, res) => {
  db.City.findById(req.params.cityId, (err, foundCity) => {
    if (err) return res.status(500).json(err);
    res.json({
      status: 200,
      data: foundCity
    });
  });
};

const update = (req, res) => {
  db.City.findByIdAndUpdate(
    req.params.cityId,
    req.body,
    { new: true },
    (err, updatedCity) => {
      if (err) return console.log(err);
      res.json({
        status: 200,
        count: 1,
        data: updatedCity,
        requestedAt: new Date().toLocaleString()
      });
    }
  );
};

const destroy = (req, res) => {
  db.City.findByIdAndDelete(req.params.cityId, (err, deletedCity) => {
    if (err) return sendErr(res);
    res.json({
      status: 200,
      data: deletedCity,
      requestedAt: new Date().toLocaleString()
    });
  });
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy
};

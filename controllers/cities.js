const db = require('../models');

// Index
const index = (req, res) => {
    db.City.find({}, (err, allCities) => {
        if (err) return console.log(err);
        res.json({
            status: 200,
            msg: "Show all cities",
            requestedAd: new Date().toLocaleString(),
            count: allCities.length,
            data: allCities
        })
    })
}

const create = (req, res) => {
    db.City.create(req.body, (err, createdCity) => {
        if (err) return console.log(err);
        res.json({
            status: 201,
            message: "Created new city",
            requetedAt: new Date().toLocaleString(),
            data: createdCity
        });
    });
}

const show = (req, res) => {
    db.City.findById(req.params.id, (err, foundCity) => {
        if (err) return res.status(500).json(err);
        res.json({
            status: 200, 
            data: foundCity,
        });
    });
}

module.exports = {
    index,
    create,
    show,
}
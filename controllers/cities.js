const db = require('../models');

const show = (req, res) => {
    console.log('Received show route')
}


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

module.exports = {
    index,
}
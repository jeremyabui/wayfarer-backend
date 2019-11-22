const db = require('../models');

const cityList = require('./cities.json');

// removes all pokemon 
db.City.remove({}, () => {
	// loops through the json file
	cityList.forEach(city => {
		// for each one creates a pokemon entry in the DB
		db.City.create(city, (error, createdCity) => {
			if (error) return console.log(error);
			console.log(createdCity);
		});
	});
});
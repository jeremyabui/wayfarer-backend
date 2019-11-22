const db = require('../models');

const cityList = require('./cities.json');

db.City.remove({}, () => {
		db.City.create(cityList, (error, createdCity) => {
			if (error) return console.log(error);
			console.log(createdCity);
		});
});
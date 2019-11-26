const db = require('../models');

const postList = require('./postSeed.json');

db.Post.remove({}, () => {
		db.Post.create(postList, (error, createdPost) => {
			if (error) return console.log(error);
			console.log(createdPost);
		});
});
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    title: String,
    body: String,
    cityName: City.Schema,
    author: User.schema,
    comment: [String],
    date: Date,
})
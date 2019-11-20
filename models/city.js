const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: String,
    photo: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post",
        }]
})

const City = mongoose.model('City', citySchema);

module.exports = City;
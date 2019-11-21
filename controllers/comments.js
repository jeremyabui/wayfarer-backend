const db = require('../models');

// Index
const index = (req, res) => {
    db.Comment.find({}, (err, allComments) => {
        if (err) return console.log(err);
        res.json({
            status: 200,
            message: "Show all comments", 
            count: allComments.length,
            data: allComments,
            requestedAt: new Date().toLocaleString(),
        });
    });
};

const show = (req, res) => {
    db.Comment.findById(req.params.commentId, (err, foundComment) => {
        if (err) return res.status(500).json(err);
        res.json({
            status: 200,
            data: foundComment
        });
    });
};

const create = (req, res) => {
    db.Comment.create (req.body, (err, createdComment) => {
        if (err) return console.log(err);
        res.json({
            status: 201,
            message: "Created comment",
            data: createdComment,
            requestedAt: new Date().toLocaleString(),
        });
    });
};


module.exports = {
    index,
    show,
    create,
}
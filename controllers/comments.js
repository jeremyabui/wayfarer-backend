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
    db.Comment.findById(req.params.id, (err, foundComment) => {
        if (err) return res.status(500).json(err);
        res.json({
            status: 200,
            data: foundComment
        });
    });
};

const create = (req, res) => {
    db.Comment.create(req.body, (err, createdComment) => {
        if (err) return console.log(err);
        res.json({
            status: 201,
            message: "Created comment",
            data: createdComment,
            requestedAt: new Date().toLocaleString(),
        });
        console.log(createdComment)
    });
};

const upDate = (req, res) => {
    db.Comment.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}, (err, upDatedComment ) => {
            if (err) return res.status(500).json({
                status: 500,
                error:[{message: "something went wrong try again"}]
            });
            res.json({
                status: 200,
                count: 1,
                data: upDatedComment,
                requestedAt: new Date().toLocaleString(),
              });
        }
    );
}

const destroy = (req, res) => {
  db.Comment.findByIdAndDelete(
    req.params.id, ((err, destroyedComment) => {
      if (err) return res.status(500).json({
        status: 500,
        error: [{message: 'Something went wrong! Please try again'}]
      })
      res.json({
        status:200,
        count: 1,
        data: destroyedComment,
        requestedAt: new Date().toLocaleString(),
      })
    })      
  );      
}

module.exports = {
    index,
    show,
    create,
    upDate,
    destroy
}
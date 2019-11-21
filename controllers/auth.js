const bcrypt = require('bcryptjs');
const db = require('../models');

//POST Register
const register = (req, res) => {
    if (!req.body.name || !req.body.username || !req.body.password || !req.body.email ) {
        return res.status(400).json({ status: 400, message: 'Please enter your name, username, email, password'});
    }
    db.User.findOne({ email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again'});
        if (foundUser) res.status(400).json({ status: 400, message: 'Email address has already been registered. Please try again'});
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again'});
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again'});
                const newUser = {
                    name: req.body.name,
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                }
                db.User.create(newUser, (err, savedUser) => {
                    if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again'});
                    res.status(201).json({ status: 201, message: 'success'});
                });
            });
        });
    });
}

// Login
const login = (req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({ status: 400, message: 'Please enter your email and password'});
    }
    db.User.findOne({ username: req.body.username} , (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.'});
        if (!foundUser) {
            return res.status(400).json({ status: 400, message: 'Username or password is incorrect'});
        }
        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. Please try again.'});
            if (isMatch) {
                req.session.currentuser = { id: foundUser._id };
                return res.status(200).json({ status: 200, message: 'Success', data: foundUser._id });
            } else {
                return res.status(400).json({ status: 400, message: 'Username or password is incorrect'});
            }
        });
    });
};

// Verify
const verify = (req, res) => {
    if (!req.session.currentUser) return res.status(401).json({ status: 401, message: 'Unauthorized'});
    res.status(200).json({
        status: 200,
        message: `Current User verified. User ID: ${req.session.currentUser.id}`
    });
};

// Logout
const logout = (req, res) => {
    if (!req.session.currentUser) return res.status(401).json({ status: 401, message: 'Unauthorized'});
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ status: 500, message: 'Something went wrong. please try again'});
        res.sendStatus(200);
    });
};

const index = (req, res) => {
    db.User.find({}, (err, allUsers) => {
        if (err) return console.log(err);
        res.json({
            status: 200,
            msg: "Show all users",
            requestedAd: new Date().toLocaleString(),
            count: allUsers.length,
            data: allUsers
        })
    })
}

module.exports = {
    register,
    login,
    verify,
    logout,
    index,
}
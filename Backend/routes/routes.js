const express = require('express').Router;
const route = express()
const {signIn, signUp} = require('../controllers/logins')
const {Bcrypt, notAuth, auth} = require('../controllers/usermngt')
const passport = require('passport');

route.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));
route.post('/signup', Bcrypt);

route.get('/', auth)
route.get('/login', notAuth);
route.get('/signup', notAuth)

module.exports = route;
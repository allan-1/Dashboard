const bcrypt = require('bcrypt');
const User = require('../models/loginmodel');


function signIn(req, res){
    const body = req.body;
    console.log(req.body);
    res.redirect('/')
}

function signUp(req, res){
    const body = req.body;
    console.log(req.body)
    res.redirect('/login')
}

module.exports = {signIn, signUp}
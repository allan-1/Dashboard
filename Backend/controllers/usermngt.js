const bcrypt = require('bcrypt');
const User = require('../models/loginmodel');

async function Bcrypt(req, res, done){
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    User.findOne({email: req.body.email}).then(user => {
        if(user){
            res.redirect('/signup');
            return(done(null, false, {message: "Email already registered"}))
        }else{
            const newuser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hashedPassword,
            })
            newuser.save();
            res.redirect('/login');
        }
    })
}

// check if user is authenticated
function auth(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}

function notAuth(req, res, next){
    if(req.isAuthenticated){
        res.redirect('/')
    }
    next()
}

module.exports = { 
    Bcrypt,
    auth,
    notAuth
}
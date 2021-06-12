const LocalStratey = require('passport-local').Strategy
const bcrypt = require('bcrypt');

const User = require('../models/loginmodel');

module.exports = function (passport){
    passport.use(
        new LocalStratey({usernameField: 'email'},
        function(username, password, done){
            User.findOne({email: username}, async function(err, user){
                if(err){
                    return done(err)
                }
                if(!user){
                    return done(null, false, {message: "Email not registered"})
                }try{
                    if(await bcrypt.compare(password, user.password)){
                        return done(null, user)
                    }else{
                        return done(null, false, {message: "Incorrect password"})
                    }
                }catch(err){
                    return done(err)
                }
            })
        }
        )
    )
    passport.serializeUser(function(user, done){
        done(null, user.id)
    })
    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user)
        })
    })
}
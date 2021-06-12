const express = require("express");
const cors = require('cors');
const session = require('express-session');
const passport = require("passport");
const app = express();
const port = process.env.port || 8080;

// imports
const Routes = require('./routes/routes');
require('./controllers/passport')(passport)

// middlewares
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

// express session
app.use(session({
    secret: 'secret123',
    resave: false,
    saveUninitialized: false
}));

// passport config
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use("/", Routes)

app.listen(port, ()=>{
    console.log("server started on port");
})
const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/Dashboard', 
    {useNewUrlParser: true, useUnifiedTopology: true}
).then(()=>{
    console.log("Database started")
}).catch((e)=>{
    console.log(e)
});

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
})

const user = mongoose.model('user', userSchema);

module.exports = user;
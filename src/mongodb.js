const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017").then(() => {
    console.log("mongodb connected");
}).catch(() => {
    console.log("failed to connect");
})

const UserSchema = new mongoose.Schema({
    last_name : {type:String, required:true},
    first_name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true}
});

const collection = new mongoose.model("users", UserSchema, "users");

module.exports = collection
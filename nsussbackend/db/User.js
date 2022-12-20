const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    userid : 'string',
    name : 'string',
    password : 'string',
    email : 'string'


});

module.exports = mongoose.model("users", userschema)
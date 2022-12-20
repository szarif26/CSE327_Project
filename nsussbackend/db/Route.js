const mongoose = require("mongoose");

const routeschema = new mongoose.Schema({
    routeId : 'String',
    name : 'string',
});

module.exports = mongoose.model("route", routeschema)
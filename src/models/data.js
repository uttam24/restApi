const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    phone: {
        type: Number,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        unique: true,
        trim: true,
    }
});

const restModel = new mongoose.model("restData", restSchema);

module.exports = restModel

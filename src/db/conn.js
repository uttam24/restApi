const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/restData")
    .then(() => {
        console.log("server is connect");
    }).catch((error) => {
        res.send(error)
    })
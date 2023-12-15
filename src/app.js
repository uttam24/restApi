const express = require('express');
const app = express();
require('./db/conn');
const restData = require("./models/data")

const PORT = 5500;
app.use(express.json());
app.get("/", async (req, res) => {
    try {
        const data = await restData.find();
        res.send(data)
    } catch (error) {
        res.status(500).json({ message: "error message" })
    }
});


app.post("/rest", (req, res) => {
    const restSendData = new restData(req.body);
    restSendData.save().then(() => { res.send(restSendData) }).catch((error) => { res.send(error) })
});


app.get("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const empData = await restData.findById(id)
    res.send(empData)
});



app.listen(PORT, () => {
    console.log(`port is runing ${PORT}`)
});
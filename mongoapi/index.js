const express = require('express')
const app = express()
app.use(express.json())
const port = 8080

const cors = require('cors')
const corsOptions = {origin: '*'}

const db_ = require("./src/mongohandler.js")

/*app.all('*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("access-control-allow-headers", "*")
    next()
})*/

app.use(cors(corsOptions))

app.post('/insert', (req, res) => {
    db_.insertDoc(req, res)
})

app.get('/', (req, res) => {
    db_.getAll(res)
})

app.listen(port, () => {
    console.log("listening port " + port)
})
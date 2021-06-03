const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
const port = 8080

const db_ = require("./src/mongohandler.js")

app.get('/', (req, res) => {
    db_.getAll(res)
})

app.post('/insert', (req, res) => {
    db_.insertDoc(req, res)
})

app.listen(port, () => {
    console.log("listening port " + port)
})
console.log("toimiiko")
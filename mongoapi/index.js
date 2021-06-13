const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT || 8080

const cors = require('cors')
const corsOptions = {origin: 'http://localhost:3000'}
app.use(cors(corsOptions))

const db_ = require("./src/mongohandler.js")

app.post('/insert', (req, res) => {
    db_.insertDoc(req, res)
})

app.get('/', (req, res) => {
    db_.getAll(res)
})

app.listen(port, () => {
    console.log("listening port " + port)
})

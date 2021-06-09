const express = require('express')
const app = express()
app.use(express.json())
const port = 8070

app.all('*', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("access-control-allow-headers", "*")
    next()
})

app.get('/', (req, res) => {
    //hae rediksesta
    res.send("Hello")
})

app.listen(port, () => {
    console.log("listening port " + port)
})
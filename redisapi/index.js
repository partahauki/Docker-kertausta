const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT || 8070

const cors = require('cors')
const corsOptions = {origin: 'http://localhost:4200'}
app.use(cors(corsOptions))

const redis = require('redis')
const { promisifyAll } = require('bluebird')
promisifyAll(redis)

const client = redis.createClient({
    host: 'redis',
    port: 6379
});

client.on('error', err => {
    console.log('Error ' + err)
});

app.get('/', async (req, res) => {
    const return_ = await client.lrangeAsync("strings", "0", "-1")
    res.send(return_)
})

app.listen(port, () => {
    console.log("listening port " + port)
})
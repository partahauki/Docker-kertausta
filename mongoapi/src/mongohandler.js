const { MongoClient } = require('mongodb')

const uri = "mongodb://mongodb:27017/test"

async function getAll(res){
    const client = new MongoClient(uri)
    
    try {
        await client.connect()
        const coll = client.db("docker").collection("strings")

        coll.find().toArray((err, data) => {
            res.json(data)
        })
     
    } catch (err) {
        console.error(err)
        res.sendStatus(500)

    } finally {
        await client.close()
    }
}

async function insertDoc(req, res){
    const insert = {}
    insert["string"] = req.body["string"].replace(/\.|\$/g, '_')
    insert["timestamp"] = Math.floor(Date.now() / 1000)

    const client = new MongoClient(uri)

    try {
        await client.connect()
        const coll = client.db("docker").collection("strings")

        await coll.insertOne(insert)
        res.sendStatus(200)

    } catch (err) {
        console.error(err)
        res.sendStatus(500)

    } finally {
        await client.close()
    }
}

module.exports = { getAll, insertDoc }
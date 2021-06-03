const {MongoClient} = require('mongodb')

async function getAll(res){
    //const uri = "mongodb+srv://mongo:27017/testi"
    const uri = "mongodb://localhost:27017/testi"
    const client = new MongoClient(uri)

    try {
        await client.connect()
    
        const coll = client.db("testi").collection("taulu")
        coll.find().toArray((err, data) => {
            res.json(data)
        })
     
    } catch (e) {
        console.error(e)
        res.json(e)
    } finally {
        await client.close();
    }
}

async function insertDoc(req, res){
    const insert = req.body

    //const uri = "mongodb+srv://mongo:27017/testi"
    const uri = "mongodb://localhost:27017/testi"
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const coll = client.db("testi").collection("taulu")

        coll.insertOne(insert, (err, data) => {
            if(err){
                res.status(500).send("Error inserting data: " + err)
            }
            else{
                res.sendStatus(200)
            }
        })
     
    } catch (e) {
        console.error(e)
        res.json(e)
    } finally {
        await client.close();
    }
}

module.exports = {getAll, insertDoc}
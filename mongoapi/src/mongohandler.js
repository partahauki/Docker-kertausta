const {MongoClient} = require('mongodb')

async function getAll(res){
    const uri = "mongodb://mongodb:27017/testi"
    //const uri = "mongodb://localhost:27017/testi"
    const client = new MongoClient(uri)

    try {
        await client.connect()
    
        const coll = client.db("testi").collection("taulu")
        coll.find().toArray((err, data) => {
            res.json(data)
        })
     
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    } finally {
        await client.close();
    }
}

async function insertDoc(req, res){
    const insert = req.body
    console.log(insert)

    const uri = "mongodb://mongodb:27017/testi"
    //const uri = "mongodb://localhost:27017/testi"
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const coll = client.db("testi").collection("taulu")

        await coll.insertOne(insert)
        res.sendStatus(200)

    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    } finally {
        await client.close();
    }
}

module.exports = {getAll, insertDoc}

/*coll.insertOne(insert, (err, data) => {
    if(err){
        res.status(500).send("Error inserting data: " + err)
    }
    else{
        
    }
})*/

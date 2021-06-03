conn = new Mongo();
db = conn.getDB("testi");

data = db.testi.find();
while(cursor.hasNext()) {
    printjson(data.next());
}

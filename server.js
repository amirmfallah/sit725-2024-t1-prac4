const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { MongoClient, ServerApiVersion } = require('mongodb');
const connectionString = "mongodb+srv://username:password@cluster0.hx6pmgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(connectionString);
let db;

async function connectDatabase() {
  let conn;
  try {
    conn = await client.connect();
    console.log("Connected to MongoDB successfully")
  } catch (e) {
    console.error(e);
    console.log("Faild to MongoDB")
  }
  return conn.db("sit725");
}

app.get('/api/cats', async (req, res) => {
  const collection = await db.collection("cats");
  const data = await collection.find({}).toArray();
  res.json({ statusCode: 200, data, message: "Success" })
})

app.post('/api/cats', async (req, res) => {
  await db.collection('cats').insertOne(req.body);
  res.json({ statusCode: 200, message: "Success" })
})


const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log("App listening on port", port);
  db = await connectDatabase();
});

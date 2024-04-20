const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5005;

//midlewere
app.use(cors());
app.use(express.json())




//username
// muhammadsaif7717
//password
// cFOyYQSkuZkBDDFg

const uri = "mongodb+srv://muhammadsaif7717:cFOyYQSkuZkBDDFg@cluster0.oh0s98i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    //get users
    app.get('/users', async (req, res) => {
      const cursor = userCollection.find()
      const result = await cursor.toArray()
      res.send(result)
    })

    //get specified user
    app.get('/users/:id', async(req,res)=>{
      const id=req.params.id;
      const query={_id: new ObjectId(id)}
      const user = await userCollection.findOne(query)
      res.send(user)
    })

    //post users
    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('New User', user)
      const result = await userCollection.insertOne(user);
      res.send(result)
    })

    //update user
    app.put('/users/:id', async(req,res)=>{
      const id=req.params.id;
      const user=req.body;
      console.log(id,user)
      const filter={_id: new ObjectId(id)};
      const updatedUser={
        $set:{
          name:user.name,
          email:user.email,
        }
      }
      const options = { upsert: true };
      const result= await userCollection.updateOne(filter,updatedUser,options);
      res.send(result)
    })

    //delete Users
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      console.log(`Please delete id: ${id}`);
      const quary = {_id: new ObjectId(id)}
      const result= await userCollection.deleteOne(quary);
      res.send(result)
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






//
app.get('/', (req, res) => {
  res.send('Simple Crud is running')
})

app.listen(port, () => {
  console.log(`Simple Crud is running on port: ${port}`)
})
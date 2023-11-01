// step-1:
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();

// middleware:
app.use(cors());
app.use(express.json());

// abrarhaider1357
// xU6hgfhJLcMmbhAK

// step-2:
const port = process.env.PORT || 5000;

// step-3: MongoDB code:
const uri = "mongodb+srv://abrarhaider1357:xU6hgfhJLcMmbhAK@cluster0.p4dlcvi.mongodb.net/?retryWrites=true&w=majority";

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
        // WRITE CRUD CODE HERE:
        // ---------------------------------------------- //
        const userCollection= client.db("userDB").collection("users");

        // Create:
        app.post('/users', async(req,res)=>{
            const user= req.body;
            const result = await userCollection.insertOne(user);
            res.send(result);
        });

        app.get('/users', async(req,res)=>{
            const result = await userCollection.find().toArray();
            res.send(result);
        });

        // Delete:
        app.delete('/users/:id', async(req,res)=>{
            const id= req.params.id;
            const query= {_id: new ObjectId(id)};
            const result= await userCollection.deleteOne(query);
            res.send(result);
        });
        // Update:
        app.get('/users/:id', async(req,res)=>{
            const id= req.params.id;
            const query= {_id: new ObjectId(id)};
            const result= await userCollection.findOne(query);
            res.send(result);
        });

        app.put('/users/:id', async(req, res)=>{
            const id= req.params.id;
            const data= req.body;
            const filter= {_id: new ObjectId(id)};
            const options={upsert: true};
            const updatedData={
                $set:{
                    name:data.name,
                    email:data.email,
                    password:data.password
                },
            };
            const result= await userCollection.updateOne(filter,updatedData,options);
            res.send(result);
        })



        // ---------------------------------------------- //

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


// Home route এ hit করার জন্যঃ
app.get('/', (req, res) => {
    res.send('CRUD is running');
});

app.listen(port, () => {
    console.log(`App is running on port, ${port}`);
});
//connecting to the database
const Controller=require ("D:/tap-cohort-4/TAP_Work/Week 2/CRUD Project/APIs.js")

const MongoClient = require('mongodb').MongoClient
const uri='mongodb+srv://Abdullah:abd1234@cluster0.cvdzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
MongoClient.connect(uri, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
     db = client.db('star-wars-quotes')
     quotesCollection = db.collection('quotes')
    
    
  })
  .catch(error => console.error(error))

  



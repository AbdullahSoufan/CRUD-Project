const { Db } = require("mongodb")





exports.create_a_task = function(req, res) {

  quotesCollection.insertOne(req.body)
  .then(result => {
    res.redirect('/')
  })
  .catch(error => console.error(error))
return console.log("Success add")
}



exports.find_quote = function (req,res){
  quotesCollection.find().toArray()
.then (results=>{
  res.render('D:/tap-cohort-4/TAP_Work/Week 2/CRUD Project/view.ejs', { quotes: results })
})

}


exports.update_quote = function (req,res){
  
  quotesCollection.findOneAndUpdate(
    
    { name: 'ahmad' },
    {
      $set: {
        name: req.body.name,
        quote: req.body.quote
      }
    },
    {
      upsert: true
    }
  )
  .then(result => {
    
    res.redirect('/')
    res.send(req.body.name);
    
   })
  .catch(error => console.error(error))

}



exports.delete_quote=function(req,res){

  quotesCollection.deleteOne(
    { name: req.body.name }
  )
    .then(result => {
      if (result.deletedCount === 0) {
        return res.json('No quote to delete')
      }
      res.json(`quote deleted`)
    })
    .catch(error => console.error(error))

}
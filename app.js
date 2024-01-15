const express = require('express')
const app = express()
const port = 3000
const mongoose =require('mongoose');


app.get('/', (req, res) => {
  res.send('welcome to my page!')
})

mongoose.connect("")
.then(()=>{
   app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
     })
})
.catch(()=>{
  console.log("Error ")
})
const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./connect')


const port = process.env.PORT || 7700

const start = async() => {
  try{
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`app listening on port ${port}`))
  }catch(err){
    console.log(err);
  }
}
start()

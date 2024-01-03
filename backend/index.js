// entry point for login and signup

const db = require("./db");
const express = require('express')

db


const app = express()
const port = 3000

//middleware
app.use(express.json())
//routes 
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


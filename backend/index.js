// entry point for login and signup

const db = require("./db");
const express = require('express')
const cors = require('cors');
db


const app = express()


//middleware
app.use(express.json())
app.use(cors());
//routes 
app.use('/api/auth',require('./routes/auth'))

const port = process.env.PORT || 5000;


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


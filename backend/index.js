
// entry point for login and signup
const db = require("./db");
// express is used to create server
const express = require('express')
//to handle cross origin resource sharing because our frontend is working on port 3000
const cors = require('cors');
db

//to define routes and start the server.
const app = express()


//middleware
app.use(express.json())
app.use(cors());
//routes 
app.use('/api/auth',require('./routes/auth'))
//app.use('/api/users',require('./routes/user'));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


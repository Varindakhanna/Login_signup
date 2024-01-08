const mongoose = require('mongoose');

const mongourl="mongodb+srv://varindakhanna2002:Varinda@users.tj173hb.mongodb.net/"


mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true , });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
 
module.exports = db; // Export the connection
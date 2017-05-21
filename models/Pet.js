const mongoose = require('mongoose');
// const Schema = mongooawa.Schema; below is a distructuring
const { Schema } = mongoose;

//database is called pet-search
mongoose.connect('mongodb://localhost/pet-search')
const { connection:db } = mongoose;

db.on('error', console.error.bind(console, 'connection error;'));
db.once('open', () => {
  console.log('connected to recipe database')
});

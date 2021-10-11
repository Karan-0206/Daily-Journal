const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const ejs= require('ejs'); 
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true},()=>{
    console.log("Connected to Mongo");
});


const indexroute = require("./routes/index");
app.use(indexroute);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

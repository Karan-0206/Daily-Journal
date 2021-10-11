const mongoose = require('mongoose');

const Journal=new mongoose.Schema({
    title:String,
    content: String
  });

module.exports =mongoose.model("Post",Journal);
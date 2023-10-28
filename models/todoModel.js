const mongoose = require("mongoose");

const todoSchema=new mongoose.Schema(
    {
      todo:{
        type:String,
        require:true,
      }
    }
  );
  
  module.exports = mongoose.model("todolist", todoSchema); //exported db model
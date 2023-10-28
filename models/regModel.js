const mongoose = require("mongoose")


const regSchema=mongoose.Schema(
    {
        Name:{
            type: String,
            require: true,
        },
        UserId:{
            type: String,
            require: true,
            unique: true,
        },
        Email:{
            type:String,
            require: true,
            unique: true,
        },
        Password:{
            type: String,
            require: true,
            unique: true,
        }
    }
);

module.exports=mongoose.model("Userdata", regSchema);//exported collection model
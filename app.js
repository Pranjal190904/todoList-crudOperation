require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const router=require("./routes/todoRoutes");
const routReg=require("./routes/regRoutes");
const passport=require("passport");
const strategy=require("passport-google-oauth20").Strategy;
const path=require("path");

const app = express();
const port=process.env.PORT;

// conenction to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/todo_crud')
.then(()=> console.log("database connected successfully"))
.catch((err)=> console.log(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(routReg);
app.use(router);
app.use(passport.initialize());

passport.use(new strategy({
    clientID:"994149117661-9cbk31aj9cvf1d83ea5pur5ehbqhu0d6.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:8000/auth/google/callback",
},function (profile,cb) {
    cb(null,profile);
}));

passport.serializeUser(function(user,cb){
    cb(null,user);
});

passport.deserializeUser(function(user,cb){
    cb(null,obj);
});

app.listen(port, () => console.log("Server started"));

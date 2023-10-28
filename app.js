require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const router=require("./routes/todoRoutes");

const app = express();
const port=process.env.PORT;

// conenction to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/todo_crud')
.then(()=> console.log("database connected successfully"))
.catch((err)=> console.log(err));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

app.listen(port, () => console.log("Server started"));

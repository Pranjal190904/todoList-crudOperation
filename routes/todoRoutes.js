const express=require("express");
const todoCtrl=require('../controllers/todoControls'); //imported functions

const router=express();

router.get("/index", todoCtrl.todoRead);
  
router.post("/add", todoCtrl.todoAdd);

router.post("/del", todoCtrl.todoDelete);

router.post("/update", todoCtrl.todoUpdate);

router.post("/logout", (req,res)=>res.redirect("/"));

module.exports=router;
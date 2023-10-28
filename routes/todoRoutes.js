const express=require("express");
const todoCtrl=require('../controllers/todoControls'); //imported functions

const router=express();

router.get("/", todoCtrl.todoRead);
  
router.post("/", todoCtrl.todoAdd);

router.post("/del", todoCtrl.todoDelete);

router.post("/update", todoCtrl.todoUpdate);

module.exports=router;
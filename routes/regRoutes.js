const express=require("express");
const todoReg=require("../controllers/todoReg");//imported functions

const router=express();

router.get("/",(req,res)=>{
    res.render("login");
});

router.post("/reg", todoReg.regUser);

router.post("/log", todoReg.log);

router.post("/r",(req,res)=>res.render("reg"));

module.exports=router;
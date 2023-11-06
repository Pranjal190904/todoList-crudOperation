const express=require("express");
const passport=require("passport");
const todoReg=require("../controllers/todoReg");//imported functions
const {signAccess}= require('../middlewares/auth');

const router=express();

router.get("/",(req,res)=>{
    res.render("login");
});

router.post("/oauth", passport.authenticate("google", { scope:
    ["profile", "email"]
}));

router.get("/auth/google/callback", passport.authenticate("google", {failureRedirect: "/"}), 
            async (req,res)=>res.redirect("/index"));

router.post("/reg", todoReg.regUser);

router.post("/log", todoReg.log);

router.post("/r",(req,res)=>res.render("reg"));

module.exports=router;
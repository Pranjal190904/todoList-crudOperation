const Todoreg=require("../models/regModel");
const bcrypt=require("bcrypt");
const {signAccess}= require('../middlewares/auth');

//function to register user
async function regUser(req,res,next)
{
    const name=req.body.name;
    const id=req.body.id;
    const mail=req.body.mail;
    const pass=req.body.pass;
    const salt=10;
    const hashedPass=await bcrypt.hash(pass,salt);
    const uId=await Todoreg.findOne({UserId:id});
    const mId=await Todoreg.findOne({Email:mail});
    if(mId!=null)
    {
        res.send("<h3>User Already Exist.<br> Kindly Login or Signup with other Email.</h3>")
    }
    else if(uId!=null)
    {
        res.send("<h3>UserId already Exist.<br> Try a Different UserId</h3>")
    }
    else{
        const user=new Todoreg(
            {
                Name:name,
                UserId:id,
                Email:mail,
                Password:hashedPass,
            }
        );
        const savedUser=await user.save();
        const accessToken=await signAccess(savedUser.UserId);
        res.redirect("/");
    }
}

//function to login
async function log(req,res)
{
    const id=req.body.id
    const pass=req.body.pass;
    const user=await Todoreg.findOne({UserId:id});
    if(user!=null)
    {
        hashedPass=user.Password;
        bcrypt.compare(pass, hashedPass,async (err, result) => {
            if (err) {
              console.error(err);
            } else if (result) {
                
                res.redirect("/index");
            } else {
              res.send("<h3>Password Incorrect</h3>");
            }
          });
    }
    else{
        console.log("id incorrect");
        res.send("<h3>UserId does not exist</h3>");
    }
}

module.exports={regUser,log}; //exported functions
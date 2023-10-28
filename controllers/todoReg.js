const Todoreg=require("../models/regModel");

//function to register user
function regUser(req,res)
{
    const name=req.body.name;
    const id=req.body.id;
    const mail=req.body.mail;
    const pass=req.body.pass;
    const user=new Todoreg(
        {
            Name:name,
            UserId:id,
            Email:mail,
            Password:pass,
        }
    );
    user.save()
    .then(()=>res.redirect("/"))
    .catch((err)=>{
        console.log("id already exist");
        res.redirect("/");
    });
}

//function to login
async function log(req,res)
{
    const id=req.body.id
    const pass=req.body.pass;
    const user=await Todoreg.findOne({UserId:id});
    if(user!=null)
    {
        if(user.Password==pass)
        {
            console.log("login success");
            res.redirect("/index");
        }
        else
        {
            console.log("password incorrct")
            res.redirect("/");
        }
    }
    else{
        console.log("id incorrect");
        res.redirect("/");
    }
}

module.exports={regUser,log}; //exported functions
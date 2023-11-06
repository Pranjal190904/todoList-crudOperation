const jwt=require('jsonwebtoken');
require('dotenv').config();
const scrt=process.env.SECRETCODE;

function signAccess(userId)
{
    return new Promise((resolve, reject) => {
        const payload={};
        const secret=scrt;
        const options={
            audience: userId
        }
        jwt.sign(payload, secret, options, (err, token)=>{
            if(err)
            {
                reject(err);
            }
            resolve(token);
        });
    });
}

function verifyAccess(res,req,next)
{
    
}

module.exports={signAccess};


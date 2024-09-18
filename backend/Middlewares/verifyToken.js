const jwt = require('jsonwebtoken')
require('dotenv').config();

function verifyToken(req, res, next){
    //get bearer Token from headers of req
    const bearerToken = req.headers.authorization;
    //if bearer token not available
    if(!bearerToken){
        res.send({message:'token not found'})
    }else{
        //extract token from bearer token
        const token = bearerToken.split(' ')[1]
        //verify token
        try{
            jwt.verify(token,process.env.SECRET_KEY)
            next();
        }catch(err){
            next(err)
        }
    }
}

module.exports = verifyToken;
const jwt= require('jsonwebtoken')

const generateToken =(id) =>{
    return jwt.sign({id},'jhjhjh',{
        expiresIn: "1d",
    });

};

module.exports=generateToken;
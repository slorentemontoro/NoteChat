const jwt= require('jsonwebtoken');

module.exports=async(req,res,next)=>{
    const {authorization} = req.headers;
const {usuario} = jwt.verify(authorization, 'secreto');
req.brand = brand;

next();
}
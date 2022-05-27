const jwt= require('jsonwebtoken');

module.exports=async(req,res,next)=>{
    const {authorization} = req.params;
const {usuario} = jwt.verify(authorization, 'secreto');
req.usuario = usuario;
next();
}
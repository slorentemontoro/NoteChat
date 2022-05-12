const Usuario=require('../models/Usuarios');
const jsw= require('jsonwebtoken');

const encryptarPass=(pass)=>{
    return pass;
}
const buildJWT=(usuario)=>{
    const time= Date.now();

    return jsw.sign({
        time,
        usuario
    },'secreto');
}

const register=async(usuario)=>{
    const {nick}=usuario;
    const revisarusuario=await Usuario.find({nick})
    if (revisarusuario=="") {
        usuario.password=encryptarPass(usuario.password)
        const newusuario=await Usuario.create(usuario);
        return buildJWT(newusuario)}
    else{
        throw new Error("user it's already exixts")
    }
}

const login=async(nick,password)=>{
    const usuario=await Usuario.findOne({nick})
    if(!usuario) throw new Error ('User not found');
    if (password==usuario.password) {
        return buildJWT(usuario)
    }else{
        throw new Error('pass incorrect')}
}

const getUsuarios=async()=>{
return await Usuario.find();
}

module.exports={
    login,
    register,
    getUsuarios
}
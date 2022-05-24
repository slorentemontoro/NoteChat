const Usuario=require('../models/Usuarios');
const Roles=require('../models/Roles')
const jsw= require('jsonwebtoken');
const encriptar= require('../midleware/encriptar')
const brcypt=require('bcrypt');

const encryptarPass=(pass)=>{
    return encriptar.encriptar(pass);
}

const buildJWT=(usuario)=>{
    const time= Date.now();

    return jsw.sign({
        time,
        usuario
    },'secreto');
}

const register=async(usuario)=>{
    const { nick }= usuario ;
    const revisarusuario=await Usuario.find({nick})
    if (revisarusuario=="") {
        usuario.password= await encryptarPass(usuario.password)
        usuario.rol=await Roles.findOne({nombre:"usuario"})
        const newusuario=await Usuario.create(usuario); 
        console.log(newusuario)
        return buildJWT(newusuario)}
    else{
        throw new Error("user it's already exixts")
    }
}
const login=async(nick,password)=>{
    const usuario = await Usuario.findOne({nick}).populate('rol').populate('archivos').populate('grados')                             
    if(!usuario) throw new Error ('User not found');
    if (await brcypt.compare(password,usuario.password)) {
        return buildJWT(usuario)
    }else{
        throw new Error('pass incorrect')}
}

const getUsuarios = async() => {
return await Usuario.find().populate('rol').populate('archivos').populate('grados');
}

const getUsuarioById=async(id)=>{
    return await Usuario.findById(id);
}

const deleteUsuario=async(id)=>{
    return await Usuario.findByIdAndDelete(id);
}

const updateUsuario=async(id,usuario)=>{
    usuario.password= await encryptarPass(usuario.password)
    return await Usuario.findByIdAndUpdate(id,usuario);
}
const anyadirUnGradoAunUsuario=async(id,grado)=>{
    if(await Usuario.find({grados:grado.id})) return 'already exixts';
    return await Usuario.findByIdAndUpdate(id,{
        $push:{grados:grado}
    })
}

const anyadirunArchivoaunUsuario=async(idusuairo,archivo)=>{
    return await Usuario.findOneAndUpdate(idusuairo,{
        $push:{ archivos:archivo}
    })
}

module.exports={
    login,
    register,
    getUsuarios,
    getUsuarioById,
    deleteUsuario,
    updateUsuario,
    anyadirUnGradoAunUsuario,
    anyadirunArchivoaunUsuario
}
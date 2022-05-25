const Usuario=require('../models/Usuarios');
const Roles=require('../models/Roles')
const jsw= require('jsonwebtoken');
const encriptar= require('../midleware/encriptar')
const brcypt=require('bcrypt');
const defaultImage=require('../midleware/defaultImage')
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
        usuario.foto_usuario= defaultImage.image;
        const newusuario=await Usuario.create(usuario); 
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
    return await Usuario.findById(id).populate('rol').populate('archivos').populate('grados');
}

const deleteUsuario=async(id)=>{
    return await Usuario.findByIdAndDelete(id);
}

const updateUsuario=async(id,img)=>{
    
    const usuarioactualizado= await Usuario.findByIdAndUpdate(id,{'foto_usuario': img}).populate('rol').then((usuario)=>{
        //usuario=usuario.populate('rol')
        console.log(usuario)
        return buildJWT(usuario)
    });
    return usuarioactualizado
}

const anyadirUnGradoAunUsuario=async(id,grado)=>{
    let revision=0;
    const usuario=await Usuario.findById(id).populate('grados');
    usuario.grados.map((gradousuario)=>{
        if (gradousuario.id==grado.id) {    
           revision=+1;
        }
    })
    if (revision>0) {
        return "ya esta este grado asignado";
    }
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
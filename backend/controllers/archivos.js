const { findById, findByIdAndDelete } = require('../models/Archivos');
const Archivos= require('../models/Archivos');
const usuarioController=require('./usuario');
const asignaturaController=require('./asignaturas');

const crearUnArchivo=async(archivo,idusuario)=>{
    
    const archivocreado=await Archivos.create(archivo)
    usuarioController.anyadirunArchivoaunUsuario(idusuario,archivocreado)
    const {asignatura}=archivocreado
    await asignaturaController.anyadirUnArchivoAUnaAsignatura(asignatura,archivocreado)
    const usuario = await usuarioController.getUsuarioById(idusuario)
    return await usuarioController.buildJWT(usuario)
}

const ObtenerArchivosDeUnaAsignatura=async(IdAsignatura)=>{
    return await Archivos.find({asignatura:IdAsignatura}).populate('autor',"nick");
}

const EliminarUnArchivo=async(idArchivo,idusuario)=>{
const archivoaBorrar=findById(archivo).where(idusuario).equals(true);
if (!archivoaBorrar) {return "archivo no encontrado"};
return await findByIdAndDelete(idArchivo)
}

module.exports={
    crearUnArchivo,
    ObtenerArchivosDeUnaAsignatura,
    EliminarUnArchivo
}
const { findById, findByIdAndDelete } = require('../models/Archivos');
const Archivos= require('../models/Archivos');
const usuarioController=require('./usuario');

const crearUnArchivo=async(archivo,idusuario)=>{

    const archivocreado=await Archivos.create(archivo)
    usuarioController.anyadirunArchivoaunUsuario(idusuario,archivocreado)
    return archivocreado;
}

const ObtenerArchivosDeUnaAsignatura=async(IdAsignatura)=>{
    return await Archivos.find({asignatura:IdAsignatura});
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
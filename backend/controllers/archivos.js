const { findById, findByIdAndDelete } = require('../models/Archivos');
const Archivos= require('../models/Archivos');

const crearUnArchivo=async(archivo)=>{
    return await Archivos.create(archivo)
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
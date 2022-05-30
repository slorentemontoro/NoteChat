const Asignaturas=require('../models/Asignaturas');
const gradosController=require('./grados');



const crearUnaAsignatura=async(asignatura)=>{
    return await Asignaturas.create(asignatura);
}

const anyadirUnArchivoAUnaAsignatura= async (idasignatura,archivo)=>{

     return await Asignaturas.findByIdAndUpdate(idasignatura,{$push:
    {archivos:archivo}})
}

const obtenerLasAsignaturasDeUnGrado=async(idgrago)=>{
return await Asignaturas.find({grado:idgrago})
}

module.exports={
    crearUnaAsignatura,
    obtenerLasAsignaturasDeUnGrado,
    anyadirUnArchivoAUnaAsignatura
}
const Asignaturas=require('../models/Asignaturas');
const gradosController=require('./grados');



const crearUnaAsignatura=async(asignatura)=>{
    return await Asignaturas.create(asignatura);
}

const obtenerLasAsignaturasDeUnGrado=async(idgrago)=>{
const grado=await gradosController.obtenerUnGrado(idgrago)
return await Asignaturas.find({grado})
}

module.exports={
    crearUnaAsignatura,
    obtenerLasAsignaturasDeUnGrado
}
const Asignaturas=require('../models/Asignaturas');
const gradosController=require('./grados');



const crearUnaAsignatura=async(asignatura)=>{
    return await Asignaturas.create(asignatura);
}

const obtenerLasAsignaturasDeUnGrado=async(idgrago)=>{
return await Asignaturas.find({grado:idgrago})
}

module.exports={
    crearUnaAsignatura,
    obtenerLasAsignaturasDeUnGrado
}
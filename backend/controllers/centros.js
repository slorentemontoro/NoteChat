const Centros=require('../models/Centros');

const CrearUnCentro=async(centro)=>{
    return await Centros.create(centro)
}

const ObtenerTodosLosCentros=async()=>{
    return await Centros.find().populate('grados');
}

const ObtenerTodosLosCentrosPorNombre=async(nombre)=>{
    return await Centros.find({"nombre": { "$regex": nombre,
    "$options": "i"}}).populate('grados')
}

const ObtenerUnCentro = async(idCentro)=>{
    return await Centros.findById(idCentro).populate('grados');
}

const EliminarUnCentro= async(idCentro)=>{
    return await Centros.findByIdAndDelete(idCentro);
}

const añadirUnGradoAUnCentro=async(idcentro,grado)=>{
    return await Centros.findByIdAndUpdate(idcentro,{
        $push:{grados:grado}
    }).populate('grados')
}

module.exports={
CrearUnCentro,
ObtenerTodosLosCentros,
ObtenerTodosLosCentrosPorNombre,
ObtenerUnCentro,
EliminarUnCentro,
añadirUnGradoAUnCentro
}
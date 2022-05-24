const Grados= require('../models/Grados');

const crearUnGrado=async(grado)=>{
return await Grados.create(grado);
}

const obtenerGrados=async()=>{
    return await Grados.find();
}
const obtenerUnGrado=async(id)=>{
    return await Grados.findById(id);
}
const obtenerGradosPorNombre=async(nombres)=>{
    return await Grados.find({"nombre": { "$regex": nombres,
    "$options": "i"}})
}

const eliminarUnGrado=async(id)=>{
    return await Grados.findByIdAndDelete(id);
}

const anyadirUnCentroAunGrado=async(id,centros)=>{
    return centros.map(centro=>Grados.findByIdAndUpdate(id,{
        $push:{centro:centro}
    }))
}

const anyadirUnComentarioAunGrado=async(id,comentario)=>{
    return await Grados.findByIdAndUpdate(id,{
        $push:{comentario:comentario}
    })
}
const anyadirUnCursoAunGrado=async(id,cursos)=>{
    return await cursos.map(curso=>{ Grados.findByIdAndUpdate(id,{
        $push:{curso:curso}
    })})
    
}

module.exports={
    crearUnGrado,
    obtenerGrados,
    eliminarUnGrado,
    anyadirUnCentroAunGrado,
    anyadirUnComentarioAunGrado,
    anyadirUnCursoAunGrado,
    obtenerGradosPorNombre,
    obtenerUnGrado
}
const Comentarios= require('../models/Comentarios');

const CrearUnComentario=async(comentario)=>{
    return await Comentarios.create(comentario);
}
const ObtenerTodosLosComentarios=async()=>{
    return await Comentarios.find().populate('usuario').populate("grado")
}
const ObtenerComentariosDeUnGrado=async(idgrado)=>{
    return await Comentarios.find({"grado": idgrado}).populate("usuario").populate("grado");
}

const EliminarUnComentario=async(idcomentario)=>{
    return await Comentarios.findByIdAndDelete(idcomentario);
}
const ObtenerComentariosDeUnUsuario=async(idusuario)=>{
    return await Comentarios.find({"usuario": idusuario}).populate("usuario").populate("grado");
}
module.exports={
    CrearUnComentario,
    ObtenerTodosLosComentarios,
    ObtenerComentariosDeUnGrado,
    ObtenerComentariosDeUnUsuario,
    EliminarUnComentario
}
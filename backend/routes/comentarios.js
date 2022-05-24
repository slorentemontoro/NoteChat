var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
var comentariosControllers=require('../controllers/Comentarios');
var gradosController=require('../controllers/grados');

router.get('/',async(req,res)=>{
    const result= await comentariosControllers.ObtenerTodosLosComentarios();
    res.json(result);
})

router.get('/grado/:idgrado',async(req,res)=>{
    const {idgrado}=req.params;
    const result=await comentariosControllers.ObtenerComentariosDeUnGrado(idgrado);
    res.json(result);
})

router.get('/usuario/:idusuario',async(req,res)=>{
    const {idusuario}=req.params;
    const result= await comentariosControllers.ObtenerComentariosDeUnUsuario(idusuario);
    res.json(result);
})

router.post('/',async(req,res)=>{
    const {comentario}=req.body;
    const {grado}=comentario;
    const result=await comentariosControllers.CrearUnComentario(comentario)
            .then((comentario)=>
            {gradosController.anyadirUnComentarioAunGrado(grado,comentario)})
    
    res.json(result);
})

router.delete('/:idcomentario',async(req,res)=>{
    const{idcomentario}= req.params;
    const result=await comentariosControllers.EliminarUnComentario(idcomentario);
    res.json(result)
})

module.exports=router;

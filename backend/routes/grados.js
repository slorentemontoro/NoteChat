var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
var gradosControllers=require('../controllers/grados');


router.get('/',async(req,res)=>{
    const result=await gradosControllers.obtenerGrados();
    res.json(result);
})

router.get('/:nombre',async(req,res)=>{
    const {nombre}= req.params;
const result=await gradosControllers.obtenerGradosPorNombre(nombre);
res.json(result);
})

router.get('/grado/:idgrado',async(req,res)=>{
    const{idgrado}=req.params;
    console.log(idgrado)
    const result=await gradosControllers.obtenerUnGrado(idgrado);
    res.json(result);
})
router.post('/',async(req,res)=>{
    const{grado}=req.body;
    const result= await gradosControllers.crearUnGrado(grado);
    res.json(result);
})

router.delete('/:idgrado',async(req,res)=>{
    const {idgrado}=req.params;
    const result=await gradosControllers.eliminarUnGrado(idgrado);
    res.json(result);
})

router.put('/GradoCentro/:idgrado',async(req,res)=>{
const {idgrado}=req.params;
const {centro}=req.body;
const result= await gradosControllers.anyadirUnCentroAunGrado(idgrado,centro);
res.json(result)
})

router.put('/ComentarioCentro/:idgrado',async(req,res)=>{
    const{idgrado}=req.params;
    const {comentario}=req.body;
    const result=await gradosControllers.anyadirUnComentarioAunGrado(idgrado,comentario)
    res.json(result);
})

router.put('/CursoCentro/:idgrado',async(req,res)=>{
    const{idgrado}=req.params;
    const{curso}=req.body;
    const result= await gradosControllers.anyadirUnCursoAunGrado(idgrado,curso);
    res.json(result);
})

module.exports=router;
var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
var centrosControllers=require('../controllers/centros');
var gradosControllers=require('../controllers/grados');

router.get('/',async(req,res)=>{
const result=await centrosControllers.ObtenerTodosLosCentros();
res.json(result)
})

router.get('/:nombre',async(req,res)=>{
    const {nombre}=req.params;
    const result= await centrosControllers.ObtenerTodosLosCentrosPorNombre(nombre)
    res.json(result);
})

router.get('/centro/:idcentro',async(req,res)=>{
    const {idcentro}=req.params
    const result= await centrosControllers.ObtenerUnCentro(idcentro);
    res.json(result);
})

router.post('/',async(req,res)=>{
    const{centro}=req.body;
    const result=await centrosControllers.CrearUnCentro(centro);
    res.json(result);
});

router.delete('/:idcentro',async(req,res)=>{
    const{idcentro}=req.params;
    const result= centrosControllers.EliminarUnCentro(idcentro);
    res.json(result);
})

router.put('/:idcentro',async(req,res)=>{
    const {idcentro}=req.params;
    const{idgrado}=req.body;
    const grado=await gradosControllers.obtenerUnGrado(idgrado);
    const result=await centrosControllers.añadirUnGradoAUnCentro(idcentro,grado)
    res.json(result);
})

module.exports=router


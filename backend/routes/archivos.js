var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
var ArchivosController=require('../controllers/archivos');

router.get('/:idAsignatura',async(req,res)=>{
    const {idAsignatura}= req.params;
    const result=await ArchivosController.ObtenerArchivosDeUnaAsignatura(idAsignatura);
    res.json(result);
})


router.post('/:idUsuario',async(req,res)=>{
    const{archivo}=req.body;
    const{idUsuario}=req.params;
    const result= ArchivosController.crearUnArchivo(archivo,idUsuario);
    res.json(result);
})

router.delete('/',async(req,res)=>{
    const{idArchivo,idUsuario}=req.body;
    const result=ArchivosController.EliminarUnArchivo(idArchivo,idUsuario);
    res.json(result)
})

module.exports=router;
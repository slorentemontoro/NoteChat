var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
var ArchivosController=require('../controllers/archivos');

router.get('/',async(req,res)=>{
    //onst {idAsignatura}= req.body;
    const result=await ArchivosController.ObtenerArchivosDeUnaAsignatura();
    res.json(result);
})


router.post('/',async(req,res)=>{
    const{archivo}=req.body;
    const{_id}=req.usuario;
    const result= ArchivosController.crearUnArchivo(archivo,_id);
    res.json(result);
})

router.delete('/',async(req,res)=>{
    const{idArchivo,idUsuario}=req.body;
    const result=ArchivosController.EliminarUnArchivo(idArchivo,idUsuario);
    res.json(result)
})

module.exports=router;
var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
var AsignaturasController=require('../controllers/asignaturas');

router.get('/:idgrado',async(req,res)=>{
    const{idgrado}=req.params;
    const result=AsignaturasController.obtenerLasAsignaturasDeUnGrado(idgrado);
    res.json(result);
})

router.post('/',async(req,res)=>{
const {asignatura}=req.body;
const result=AsignaturasController.crearUnaAsignatura(asignatura);
res.json(result)
})


module.exports=router;
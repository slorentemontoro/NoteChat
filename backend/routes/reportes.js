var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
var reportesControler=require('../controllers/reportes');

router.get('/',async(req,res)=>{
    const result=await reportesControler.obtenerReportes();
    res.json(result);
})

router.get('/revisados',async(req,res)=>{
    const result=await reportesControler.obetenerReportesRevisados();
    res.json(result);
})

router.get('/sinrevisar',async(req,res)=>{
    const result= await reportesControler.obetenerReportesNoRevisados();
    res.json(result);
})

router.post('/',async(req,res)=>{
    const {reporte}=req.body;
    const result= await reportesControler.crearReporte(reporte);
    res.json(result)
})

router.put('/revisar/:idReporte',async(req,res)=>{
    const {idReporte}=req.params;
    const result=await reportesControler.revisarUnReporte(idReporte);
    res.json(result)
})

module.exports=router;
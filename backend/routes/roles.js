var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
var rolesControllers=require('../controllers/roles');
const roles = require('../models/Roles');


router.post('/',async (req,res)=>{
    const{rol}=req.body;
    const result=await rolesControllers.crearRol(rol);
    res.json(result)
})

router.get('/',async (req,res)=>{
    const result= await rolesControllers.GetRoles();
    res.json(result)
})

router.delete('/:idrol',async (req,res)=>{
    const {idrol} = req.params;
    const result = await rolesControllers.EliminarRol(idrol)
    res.json(result);
})

router.put('/:idrol',async(req,res)=>{
    const {idrol}=req.params
    const {rol}=req.body
    const result= await rolesControllers.UpdateRol(idrol,rol)
    res.json(result)
})

module.exports=router;
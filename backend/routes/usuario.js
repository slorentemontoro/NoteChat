var router= require('express').Router();
const { request } = require('express');
var usuarioControllers=require('../controllers/usuario');
const authorization = require('../midleware/authorization');

router.post('/login',async(req,res)=>{
    const{nick,password}=req.body
    const result=await usuarioControllers.login(nick,password);
    res.json(result);
})

router.post('/',async(req,res)=>{
    const {usuario}=req.body
    const result= await usuarioControllers.register(usuario)
    res.json(result)
})

router.get('/',async(req,res)=>{
    const result= usuarioControllers.getUsuarios()
    res.json(result)
})

module.exports=router;
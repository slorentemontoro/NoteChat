var router= require('express').Router();
const { request } = require('express');
const status= require('http-status');
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
    const result= await usuarioControllers.getUsuarios()
    res.json(result)
})

router.get('/:idusuario',async(req,res)=>{
    const{idusuario}=req.params;
    const result= await usuarioControllers.getUsuarioById(idusuario)
    res.json(result)
})

router.delete('/:idusuario',async(req,res)=>{
    const {idusuario}=req.params;
    const result= await usuarioControllers.deleteUsuario(idusuario);
    if (!result) {
        res.send(status.NO_CONTENT)
    }
    res.send(status[200])
})

router.put('/:idusuario',async(req,res)=>{
    const{idusuario}=req.params
    const{usuario}=req.body
    const result=await usuarioControllers.updateUsuario(idusuario,usuario)
    res.json(result)
})


module.exports=router;
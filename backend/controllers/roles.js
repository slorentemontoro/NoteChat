const Roles=require('../models/Roles');

const crearRol= async(rol)=>{
return await Roles.create(rol);
}
const GetRoles= async()=>{
    return await Roles.find();
}
const EliminarRol= async(id)=>{
    return await Roles.findByIdAndDelete(id);
}
const UpdateRol=async(id,rol)=>{
    return await Roles.findByIdAndUpdate(id,rol)
}
const Obtenerunrol= async()=>{
return await Roles.find()
}
module.exports={
    crearRol,
    GetRoles,
    EliminarRol,
    UpdateRol,
    Obtenerunrol
}
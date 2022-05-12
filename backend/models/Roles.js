const {model,Schema}=require('mongoose');

const schema=new Schema({
    nombre:String
});

const roles=model('roles',schema);
module.exports=roles;
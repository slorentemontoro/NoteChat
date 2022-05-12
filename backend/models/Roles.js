const {model,Schema}=require('moongose');

const schema=new Schema({
    nombre:String
});

const Roles=model('Roles',schema);
module.exports=Roles;
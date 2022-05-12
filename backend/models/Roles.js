const {model,Schema}=require('moongose');

const schema=new Schema({
    nombre:String
});

const roles=model('roles',schema);
module.exports=roles;
const {model,Schema}=require('mongoose');

const schema=new Schema({
    nombre:String,
    CIF:String,
    telefono:Number,
    direccion:String,
    web:String,
    fotosCentro:String,
    grados:[{
        type:Schema.Types.ObjectId,
        ref:'grados'
        }]    
});
const centros=model('centros',schema);
module.exports=centros;  
const {model,Schema}=require('mongoose');

const schema=new Schema({
    imagen:String,
    descripcion:String,
    centro:{
        type:Schema.Types.ObjectId,
        ref:'centros'
    }
});

const fotos_centro=model('fotos_centro',schema);
module.exports=fotos_centro;
const {model,Schema}=require('mongoose');

const schema=new Schema({
    usuario:{
        type:Schema.Types.ObjectId,
        ref:'usuarios'
    },
    descripcion:String,
    grado:{
        type:Schema.Types.ObjectId,
        ref:'grados'
    }
});
const comentarios=model('comentarios',schema);
module.exports=comentarios;  
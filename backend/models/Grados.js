const {model,Schema}=require('moongose');

const schema= new Schema({
    nombre:String,
    descripcion:String,
    centro:[{
        type:Schema.Types.ObjectId,
        ref:'centros'
    }],
    comentario:[{
        type:Schema.Types.ObjectId,
        ref:'comentarios'
    }],
    curso:[{
        type:Schema.Types.ObjectId,
        ref:'cursos'
    }]
});
const grados=model('grados',schema);
module.exports=grados;  
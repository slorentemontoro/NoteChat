const {model,Schema}=require('moongose');

const schema= new Schema({
    nombre:String,
    descripcion:String,
    centro:[{
        type:Schema.Types.ObjectId,
        ref:'centro'
    }],
    comentario:[{
        type:Schema.Types.ObjectId,
        ref:'comentario'
    }],
    curso:[{
        type:Schema.Types.ObjectId,
        ref:'curso'
    }]
});
const grados=model('grados',schema);
module.exports=grados;  
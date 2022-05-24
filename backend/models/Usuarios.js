const {model,Schema}=require('mongoose');

const schema= new Schema({
    nick:String,
    password:String,
    correo:String,
    foto_usuario:String,
    grados:[{
        type:Schema.Types.ObjectId,
        ref:'grados'
    }],
    rol:{
        type:Schema.Types.ObjectId,
        ref:'roles'
    },
    archivos:[{
        type:Schema.Types.ObjectId,
        ref:'archivos'
    }]
});
const usuarios=model('usuarios',schema);

module.exports=usuarios;
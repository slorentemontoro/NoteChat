const {model,Schema}=require('moongose');

const schema= new Schema({
    nick:String,
    password:String,
    correo:String,
    Foto_Usuario:String,
    grados:[{
        type:Schema.Types.ObjectId,
        ref:'grados'
    }],
    centro:{
        type:Schema.Types.ObjectId,
        ref:'centro'
    },
    rol:{
        type:Schema.Types.ObjectId,
        ref:'rol'
    },
    archivos:[{
        type:Schema.Types.ObjectId,
        ref:'archivos'
    }],
    favoritos:{
            type:Schema.Types.ObjectId,
            ref:'favoritos'
    }
});
const usuarios=model('usuarios',schema);
module.exports=usuarios;
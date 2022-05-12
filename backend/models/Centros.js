const {model,Schema}=require('moongose');

const schema=new Schema({
    nombre:String,
    CIF:String,
    telefono:Number,
    direccion:String,
    web:String,
    usuario:[{
        type:Schema.Types.ObjectId,
        ref:'usuario'
        }],
    fotosCentro:[{
        type:Schema.Types.ObjectId,
            ref:'fotos_centro'
        }],
    grados:[{
        type:Schema.Types.ObjectId,
        ref:'grados'
        }]    
});
const centros=model('centros',schema);
module.exports=centros;  
const {model,Schema}=require('mongoose');

const schema=new Schema({
    nombre:String,
    CIF:String,
    telefono:Number,
    direccion:String,
    web:String,
    usuarios:[{
        type:Schema.Types.ObjectId,
        ref:'usuarios'
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
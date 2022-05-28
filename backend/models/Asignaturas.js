const {model,Schema}=require('mongoose');

const schema=new Schema({
    nombre:String,
    descripcion:String,
    grado:{
        type:Schema.Types.ObjectId,
        ref:'grados'
    },
    archivos:[{
        type:Schema.Types.ObjectId,
        ref:'archivos'
    }],
    identificador:String
});

const asignaturas=model('asignatura',schema);
module.exports=asignaturas;
const {model,Schema}=require('mongoose');

const schema=new Schema({
    nombre:String,
    archivo:String,
    asignatura:{
        type:Schema.Types.ObjectId,
        ref:'asignaturas'
    },
    autor:{
        type:Schema.Types.ObjectId,
        ref:'usuarios'
    }
});

const archivos=model('archivos',schema);
module.exports=archivos;
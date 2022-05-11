const {model,Schema}=require('moongose');

const schema=new Schema({
    nombre:String,
    asignatura:{
        type:Schema.Types.ObjectId,
        ref:'asignaturas'
    },
    autor:{
        type:Schema.Types.ObjectId,
        ref:'usuarios'
    },
    reporte:[{
        type:Schema.Types.ObjectId,
        ref:'reportes'
    }]
});

const archivos=model('archivos',schema);
module.exports=archivos;
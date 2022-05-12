const {model,Schema}=require('mongoose');

const schema=new Schema({
    nombre:String,
    grado:{
        type:Schema.Types.ObjectId,
        ref:'grados'
    },
    asignaturas:[{
        tyoe:Schema.Types.ObjectId,
        ref:'asignaturas'
    }]
});

const cursos=model('cursos',schema);
module.exports=cursos;
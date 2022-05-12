const {model,Schema}=require('moongose');

const schema=new Schema({
    nombre:String,
    descripcion:String,
    grados:[{
        type:Schema.Types.ObjectId,
        ref:'grados'
    }],
    archivos:[{
        type:Schema.Types.ObjectId,
        ref:'archivos'
    }],
    identificador:String
});

const asignaturas=model('asignaturas',schema);
module.exports=asignaturas;
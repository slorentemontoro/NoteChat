const {model,Schema}=require('mongoose');

const schema=new Schema({
    usuario:{
        type:Schema.Types.ObjectId,
        ref:'usuarios'
    },
    archivo:{
        type:Schema.Types.ObjectId,
        ref:'archivos'
    },
    descripcion:String,
    revisado:Boolean
});

const reportes=model('reportes',schema);
module.exports=reportes;
const {model,Schema}=require('moongose');

const schema=new Schema({
    nombre:String,
    direccion:String,
    web:String,
    telefono:Number,
    cif:String,
    representante:String,
    anuncios:[{
        type:Schema.Types.ObjectId,
        ref:'anuncios'
    }]
});

const companyias=model('companyias',schema);
module.exports=companyias;
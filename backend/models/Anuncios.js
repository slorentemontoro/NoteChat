const {model,Schema}=require('moongose');

const schema=new Schema({
    descripcion:String,
    imagen:String,
    companyia:{
        type:Schema.Types.ObjectId,
        ref:'companyias'
    }
});

const anuncios=model('anuncios',schema);
module.exports=anuncios;
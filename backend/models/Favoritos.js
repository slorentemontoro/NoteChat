const {model,Schema}=require('moongose');

const schema=new Schema({
   Usuario:{
       type:Schema.Types.ObjectId,
       ref:'usuarios'
   },
   archivos:[{
    type:Schema.Types.ObjectId,
    ref:'archivos'
   }]
});
const favoritos=model('favoritos',schema);
module.exports=favoritos;  
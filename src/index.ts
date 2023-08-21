export class Msg{
 static show(message:String,color:String,bg:String){
    console.log(`%c ${message}`,`color:${color}; background:${bg}`);
 }


} 
export class Log{
 static log(message:String,color:String,bg:String){
    console.log(`%c ${message}`,`color:${color}; background:${bg}`);
 }


} 
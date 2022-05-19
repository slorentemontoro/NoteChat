export class User{
    
    nick:String;
    password:String;
    correo:String;


  constructor(
    nick: String, 
    password: String, 
    correo: String, 
) {
    this.nick = nick
    this.password = password
    this.correo = correo
  }

}
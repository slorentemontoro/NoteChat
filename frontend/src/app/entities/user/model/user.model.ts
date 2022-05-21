export class User{
    
    nick:String;
    password:String;
    email?:String;


  constructor(
    nick: String, 
    password: String, 
    email?: String, 
) {
    this.nick = nick
    this.password = password
    this.email = email
  }

}
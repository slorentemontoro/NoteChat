export class Profile{
  
    id: number
    nick:String;
    password:String;
    rolname: String;
    image_user: String;
    archivos: String[];
    email?:String;
    grados?: String[];


  constructor(
    id: number, 
    nick: String, 
    password: String, 
    rolname: String, 
    image_user: String, 
    archivos: String[], 
    email?: String, 
    grados?: String[]
) {
    this.id = id
    this.nick = nick
    this.password = password
    this.rolname = rolname
    this.image_user = image_user
    this.archivos = archivos
    this.email = email
    this.grados = grados
  }




}
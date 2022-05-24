export class Profile{
    
    nick:String;
    password:String;
    rolid!: number;
    rolname: String;
    archivos: String[];
    email?:String;
    grados?: String[];



  constructor(
    nick: String, 
    password: String, 
    rolname: String, 
    archivos: String[], 
    email?: String, 
    grados?: String[]
) {
    this.nick = nick
    this.password = password
    this.rolname = rolname
    this.archivos = archivos
    this.email = email
    this.grados = grados
  }


}
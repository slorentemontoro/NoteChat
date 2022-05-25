export class Profile{
  
    id: number
    nick:String;
    password:String;
    rol: String;
    foto_usuario: String;
    archivos: String[];
    correo?:String;
    grados?: String[];



  constructor(
    id: number, 
    nick: String, 
    password: String, 
    rol: String, 
    foto_usuario: String, 
    archivos: String[], 
    correo?: String, 
    grados?: String[]
) {
    this.id = id
    this.nick = nick
    this.password = password
    this.rol = rol
    this.foto_usuario = foto_usuario
    this.archivos = archivos
    this.correo = correo
    this.grados = grados
  }





}
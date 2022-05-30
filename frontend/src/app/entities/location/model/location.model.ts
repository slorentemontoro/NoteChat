export class Centro{
  _id: string
    nombre: String
    CIF: string
    telefono: number
    direccion: string
    web: string


  constructor(
    _id: string, 
    nombre: String, 
    CIF: string, 
    telefono: number, 
    direccion: string, 
    web: string
) {
    this._id = _id
    this.nombre = nombre
    this.CIF = CIF
    this.telefono = telefono
    this.direccion = direccion
    this.web = web
  }



}
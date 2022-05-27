export class Centro{
    nombre: String
    CIF: string
    telefono: number
    direccion: string
    web: string

  constructor(
    nombre: String, 
    CIF: string, 
    telefono: number, 
    direccion: string, 
    web: string
) {
    this.nombre = nombre
    this.CIF = CIF
    this.telefono = telefono
    this.direccion = direccion
    this.web = web
  }


}
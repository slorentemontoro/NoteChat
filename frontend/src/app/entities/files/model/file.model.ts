import { Obj } from "@popperjs/core"

export class File{
    nombre:String
    archivo:String
    asignatura: string
    autor: Object




  constructor(
    nombre: String, 
    archivo: String, 
    asignatura: string, 
    autor: Object
) {
    this.nombre = nombre
    this.archivo = archivo
    this.asignatura = asignatura
    this.autor = autor
  }


}
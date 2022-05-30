import { Subjects } from "../../subjects/model/subject.model"
import { User } from "../../user/model/user.model"

export class File{
    nombre:String
    archivo:String
    asignatura: Subjects
    autor: User



  constructor(
    nombre: String, 
    archivos: String, 
    asignatura: Subjects, 
    autor: User
) {
    this.nombre = nombre
    this.archivo = archivos
    this.asignatura = asignatura
    this.autor = autor
  }


}
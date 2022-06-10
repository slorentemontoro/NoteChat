export class Grade{
    _id: number;
    nombre: string;
    imagen: string;
    descripcion?: string;
    
  constructor(
    _id: number, 
    nombre: string, 
    imagen: string, 
    descripcion?: string
) {
    this._id = _id
    this.nombre = nombre
    this.imagen = imagen
    this.descripcion = descripcion
  }

}
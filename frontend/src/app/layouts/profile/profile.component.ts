import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  nombre!: string
  email!: string
  rol!: string
  image!: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserByJWT()

  }

  async getUserByJWT() {
    var token = localStorage.getItem('jwt');
    var decodeToken: JSON =  jwt_decode(token!);
    this.nombre = Object.values(decodeToken)[1].nick
    this.nombre =  this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    this.email = Object.values(decodeToken)[1].email
    this.rol = Object.values(decodeToken)[1].rol.nombre
    this.rol =  this.rol.charAt(0).toUpperCase() + this.rol.slice(1);
    this.image = Object.values(decodeToken)[1].foto_usuario
    this.image = "data:image/jpeg;base64," + this.image
  }

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
       this.image =  event.target!.result;
      }
    }
  }

}

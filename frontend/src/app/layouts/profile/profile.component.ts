import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { File } from 'src/app/entities/files/model/file.model';
import { Subjects } from 'src/app/entities/subjects/model/subject.model';
import { Profile } from 'src/app/entities/user/model/profile.model';
import { UserService } from 'src/app/entities/user/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile!: Profile
  id! : string
  nombre!: string
  email!: string
  rol!: string
  image!: any
  files: File[] = []
  subject: Subjects[] = []

  constructor(private profileService: UserService) { }

  ngOnInit(): void {
    this.getUserByJWT()
    var token = localStorage.getItem('jwt');
    var decodeToken: JSON =  jwt_decode(token!);
    console.log(decodeToken)
  }


  async getUserByJWT() {
    var token = localStorage.getItem('jwt');
    var decodeToken: JSON =  jwt_decode(token!);
    this.nombre = Object.values(decodeToken)[1].nick
    this.nombre =  this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    this.email = Object.values(decodeToken)[1].email
    this.rol = Object.values(decodeToken)[1].rol.nombre
    this.files = Object.values(decodeToken)[1].archivos
    this.image = Object.values(decodeToken)[1].foto_usuario
    this.id = Object.values(decodeToken)[1]._id
  }

  async onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.image = event.target!.result

        this.saveProfile();
      } 
    }
  }


   saveProfile() {
     console.log(this.image)
    this.profileService.saveProfile(this.id, this.image).subscribe({
      next: (itemInserted) => {
        console.log(itemInserted)
        var decodeToken: JSON =  jwt_decode(itemInserted);
        localStorage.clear()
        localStorage.setItem('jwt', itemInserted) 
      },
      error: (err) => { console.log(err);}
  })
  }

}

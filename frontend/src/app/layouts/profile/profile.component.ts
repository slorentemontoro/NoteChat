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
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserByJWT()

    console.log(this.route.snapshot.paramMap.get("userId"))
  }

  async getUserByJWT() {
    var token = localStorage.getItem('jwt');
    var decodeToken: JSON =  jwt_decode(token!);
    this.nombre = Object.values(decodeToken)[1].nick
    this.email = Object.values(decodeToken)[1].email
    this.rol = Object.values(decodeToken)[1].rol
  }

}

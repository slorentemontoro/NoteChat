import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user/model/user.model';
import jwt_decode from "jwt-decode";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loged: boolean = false;
  userloged!: User;
  user!: JSON
  userId!: number
  rol!: string
  constructor( private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit(): void {
    this.userLoged()
    this.getUserByJWT()
  }

  async userLoged() {

    const jwt = localStorage.getItem('jwt')
    if(jwt !== null){
      this.loged = true
      
    } else {
      this.loged = false
    }
  }

  async getUserByJWT() {
    var token = localStorage.getItem('jwt');
    var decodeToken: JSON =  jwt_decode(token!);
    this.user = Object.values(decodeToken)[1].nick
    this.userId = Object.values(decodeToken)[1]._id
    this.rol = Object.values(decodeToken)[1].rol.nombre
  }

  logOut() {
    localStorage.clear()
    this.router.navigate([""]).then(() => {
      window.location.reload();
    });
  }


  areYouRegistered() {
    var token = localStorage.getItem('jwt')

    if(token == null){
      this.router.navigate(["register"])
    }
  }

}

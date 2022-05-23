import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user/model/user.model';
import jwt_decode from "jwt-decode";

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
  constructor() { }

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
    console.log(decodeToken)
    this.user = Object.values(decodeToken)[1].nick
    this.userId = Object.values(decodeToken)[1]._id
  }

  logOut() {
    localStorage.clear()
    location.reload()
  }

}

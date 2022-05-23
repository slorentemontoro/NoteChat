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
  constructor() { }

  ngOnInit(): void {
    this.userLoged()
    this.getUserByJWT()
  }

  async userLoged() {

    const jwt = localStorage.getItem('jwt')
    console.log(localStorage.getItem('jwt'))
    if(jwt !== null){
      this.loged = true
      
    } else {
      this.loged = false
    }
  }

  async getUserByJWT() {
    var token = localStorage.getItem('jwt');
    this.user = jwt_decode(token!);
     console.log(this.user)
  }

  logOut() {
    localStorage.clear()
    location.reload()
  }

}

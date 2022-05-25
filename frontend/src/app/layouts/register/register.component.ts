import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user/model/user.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/entities/user/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user?: User

  constructor(private userService: UserService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.user = new User( "", "", "")
  }


  async userRegister(){
    console.log(this.user);

    this.userService.create(this.user!).subscribe({
      next: (itemInserted) => {
        localStorage.setItem("jwt", itemInserted);
        this.router.navigate(["grades"]).then(() => {
          window.location.reload();
        });
      },
      error: (err) => { console.log(err);}
  })
  };



}

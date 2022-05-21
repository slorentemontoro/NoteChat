import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/entities/user/model/user.model';
import { UserService } from 'src/app/_services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user?: User
  constructor(private userService: UserService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.user = new User( "", "")
  }


  async loginClick(){
    console.log(this.user);

    this.userService.login(this.user?.nick!).subscribe({
      next: (itemInserted) => {
        console.log("Logeado Correctamente");
        console.log(itemInserted);
        this.router.navigate(['grades']);
      },
      error: (err) => { console.log(err);}
  })
  };

}

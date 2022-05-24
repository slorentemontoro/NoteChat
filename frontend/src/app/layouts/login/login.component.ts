import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/entities/user/model/user.model";
import jwt_decode from "jwt-decode";
import { UserService } from "src/app/entities/user/service/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  user?: User;
  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.user = new User("", "");
  }

  async loginClick() {
    console.log(this.user);

    this.userService.login(this.user!).subscribe({
      next: (itemInserted) => {
        localStorage.setItem("jwt", itemInserted);
        this.router.navigate(["grades"]).then(() => {
          window.location.reload();
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login_email: string;
  login_password: string;
  error: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.error = undefined;
    this.authService.signIn(this.login_email, this.login_password)
      .subscribe(
        (data) => {},
        (error) => {
          this.error = error;
        }
      );
  }
}

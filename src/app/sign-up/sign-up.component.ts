import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServerApiService } from '../server-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // error: string;
  // email: string;
  // name: string;
  // password: string;
  // password_confirmation: string;
  //
  // constructor(
  //   private api: ServerApiService,
  //   private router: Router
  // ) { }

  ngOnInit() {
  }

  // signUp() {
  //   this.error = undefined;
  //   this.api.signUp(this.email, this.password, this.password_confirmation, this.name)
  //     .subscribe(
  //       (data) => {
  //         this.router.navigate(['/']);
  //       },
  //       (error) => {
  //         this.error = error;
  //       }
  //     );
  // }
}

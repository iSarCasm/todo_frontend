import { Component } from '@angular/core';

import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({
      apiBase: 'https://isarcasm-todo.herokuapp.com',
      apiPath: 'api/auth',
      signInPath: 'sign_in.json',
      globalOptions: {
        headers: {
          'accept': 'version=1',
          'Content-Type':  'application/json',
          "access_token_name": localStorage.getItem('accessToken'),
          "client_name": localStorage.getItem('client'),
          "uid_name": localStorage.getItem('uid'),
          "expiry_name": localStorage.getItem('expiry'),
          'token-type_name': 'Bearer'
        }
      }
    });
  }
}

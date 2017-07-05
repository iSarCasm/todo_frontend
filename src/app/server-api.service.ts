import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class ServerApiService {
  constructor(
    private http: Http,
    private tokenService: Angular2TokenService
  ) {}

  site: string = "https://isarcasm-todo.herokuapp.com/api";
  path = {
    'stats':    this.site + '/stats.json',
    'sign_in':  this.site + '/auth/sign_in.json'
  }
  headers = new Headers({'accept': 'version=1'});
  options = new RequestOptions({ headers: this.headers });

  getStats() {
    return this.http.get(this.path['stats'], this.options)
      .map(
        (response) => {
          return response.json()
        }
      );
  }

  signIn(email: string, password: string) {
    // return this.http.post(this.path['sign_in'], {email: email, password: password}, this.options);
    return this.tokenService.signIn({
      email: email,
      password: password
    });
  }

  signUp(email: string, password: string, password_confirmation: string, name: string) {
    return this.tokenService.registerAccount({
      email: email,
      password: password,
      passwordConfirmation: password_confirmation,
      name: name
    });
  }
}

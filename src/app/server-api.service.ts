import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerApiService {
  constructor(private http: Http) {}

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

  signIn(login: string, password: string) {
    return this.http.post(this.path['sign_in'], {email: login, password: password}, new RequestOptions({ headers: new Headers({'accept': 'version=1'}) }))
      .map(
        (response) => {
          return response.json().data
        }
      );
  }
}

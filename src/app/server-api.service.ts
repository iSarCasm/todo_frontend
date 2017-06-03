import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServerApiService {
  constructor(private http: Http) {}

  site: string = "https://isarcasm-todo.herokuapp.com/api";

  getStats() {
    const headers = new Headers({'accept': 'version=1'});
    return this.http.get(this.site + '/stats.json', {headers: headers})
      .map(
        (response) => {
          return response.json()
        }
      );
  }
}

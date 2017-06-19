import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';

import { ServerApiService } from '../server-api.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private serverApi: ServerApiService,
    private dashboard: DashboardService
  ) {}

  signedIn: boolean = false;

  signIn(login: string, password: string) {
    let observable = this.serverApi.signIn(login, password);
    observable
      .subscribe(
        (response) => {
          let data = response.json().data;
          let headers = response.headers;
          console.log(headers);
          let user = new User(data.uid, data.name, data.email, data.avatar['url'], []);
          user.client = headers['client'];
          user.token = headers['token'];
          console.log(user);
          this.signedIn = true;
          this.dashboard.user = user;
        }
      );
    return observable;
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ServerApiService } from '../server-api.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { User } from '../user/user.model';

@Injectable()
export class AuthService {
  constructor(
    private router: Router,
    private serverApi: ServerApiService,
    private dashboard: DashboardService
  ) {}

  signedIn: boolean = false;

  signIn(login: string, password: string) {
    let observable = this.serverApi.signIn(login, password);
    observable
      .subscribe(
        (data) => {
          this.signedIn = true;
          this.dashboard.user = new User(data.uid, data.name, data.email, data.avatar['url'], []);
          this.router.navigate(['/dashboard']);
        }
      );
    return observable;
  }
}

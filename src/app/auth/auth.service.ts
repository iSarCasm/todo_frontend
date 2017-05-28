export class AuthService {
  signedIn: boolean = false;

  signIn() {
    this.signedIn = true;
  }
}

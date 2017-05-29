export class AuthService {
  signedIn: boolean = true;

  signIn() {
    this.signedIn = true;
  }
}

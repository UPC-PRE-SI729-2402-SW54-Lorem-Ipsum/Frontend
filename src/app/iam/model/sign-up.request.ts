export class SignUpRequest {
  public username: string;
  public password: string;
  public fullName: string;

  // TO-DO: add fields.

  constructor(username: string, fullName: string, password: string) {
    this.username = username;
    this.password = password;
    this.fullName = fullName;
  }
}

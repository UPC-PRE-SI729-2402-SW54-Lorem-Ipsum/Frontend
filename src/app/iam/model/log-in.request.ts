// Class to hold the log in request data

export class LogInRequest {
  public username: string;
  public password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export class LogInResponse {
  // TO-DO: Add token property

  public id: number;
  public username: string;

  constructor(id: number, username: string) {
    this.id = id;
    this.username = username;
  }
}

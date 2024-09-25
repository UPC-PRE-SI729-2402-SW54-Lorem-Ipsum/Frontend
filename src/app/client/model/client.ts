export class Client {
  id: number;
  name: string;
  lastname: string;
  number: string;
  email: string;
  image_profile: string;
  cases_made: any[]; // Añadimos la propiedad last_case

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.number = '';
    this.email = '';
    this.image_profile = '';
    this.cases_made = [];
  }
}

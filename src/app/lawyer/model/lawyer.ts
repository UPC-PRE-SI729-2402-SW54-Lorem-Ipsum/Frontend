export class Lawyer {
  id: number;
  name: string;
  lastname: string;
  speciality: string;
  number: string;
  email: string;
  rating: number;
  image_profile: string;
  last_case: any[]; // Añadimos la propiedad last_case

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastname = '';
    this.speciality = '';
    this.number = '';
    this.email = '';
    this.rating = 0;
    this.image_profile = '';
    this.last_case = [];
  }
}

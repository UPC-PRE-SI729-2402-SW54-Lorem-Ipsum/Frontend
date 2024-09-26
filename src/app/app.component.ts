import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registered = false;
  newLawyer = {
    function: '',
    id: '',
    ciudad: '',
    certificate: null
  };
  options = [
    { text: 'Chat S/20.00', selected: false },
    { text: 'Video Llamada S/40.00', selected: false },
    { text: 'Presencial S/50.00', selected: false }
  ];
  lawyers = [
    { name: 'Lucas Aldave', function: 'Abogado de violencia familiar', image: 'assets/images/lucas-ghersi.jpg'  },
    { name: 'GianPaul Custodio Chavarria', function: 'Abogado penal', image: 'assets/images/jpc_3.jpg' },
    { name: 'Marcos Chenssen C.', function: 'Abogado civil', image: 'assets/images/MARCOS-GARCÍA-MONTES_-73-copia.jpg' },
    { name: 'Christopher David Escobar Cayampi', function: 'Abogado laboral', image: 'assets/images/Chirstopher-Cubillas.jpg' },
    { name: 'Alinet Fernandez Taipe', function: 'Abogado de familia', image: 'assets/images/istockphoto-1587604256-612x612.jpg' }
  ];

  toggleOption(index: number) {
    this.options[index].selected = !this.options[index].selected;
  }

  register() {
    this.registered = true;
  }

  onFileChange(event: any) {
    this.newLawyer.certificate = event.target.files[0];
  }
}


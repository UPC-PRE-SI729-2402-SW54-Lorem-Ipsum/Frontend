import { Component } from '@angular/core';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent {
  searchQuery: string = '';
  casos = [
    { titulo: 'Violencia Doméstica', descripcion: 'Asistencia legal sobre violencia doméstica', estado: 'ABIERTO' },
    { titulo: 'Divorcio y Separación Legal', descripcion: 'Consultas y procesos de divorcio', estado: 'CERRADO' },
    { titulo: 'Matrimonio', descripcion: 'Asesoría legal para contratos de matrimonio', estado: 'ABIERTO' },
    { titulo: 'Custodia y Visita de Menores', descripcion: 'Casos sobre custodia de menores', estado: 'CERRADO' }
  ];
}

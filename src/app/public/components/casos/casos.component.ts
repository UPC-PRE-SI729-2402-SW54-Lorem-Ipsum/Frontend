import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-casos',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './casos.component.html',
  styleUrls: ['./casos.component.css']
})
export class CasosComponent {
  searchQuery: string = '';
  casos = [
    { titulo: 'Violencia Doméstica', descripcion: 'Asistencia legal sobre violencia doméstica', estado: 'ABIERTO' },
    { titulo: 'Divorcio y Separación Legal', descripcion: 'Consultas y procesos de divorcio', estado: 'CERRADO' },
    { titulo: 'Matrimonio', descripcion: 'Asesoría legal para contratos de matrimonio', estado: 'ABIERTO' },
    { titulo: 'Custodia y Visita de Menores', descripcion: 'Casos sobre custodia de menores', estado: 'CERRADO' }
  ];
}

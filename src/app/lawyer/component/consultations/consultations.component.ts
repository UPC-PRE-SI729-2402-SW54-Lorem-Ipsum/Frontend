import { Component, OnInit } from '@angular/core';
import { ConsultationService } from '../../services/consultation.service';
import { AuthenticationService } from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {
  consultations: any[] = [];
  filteredConsultations: any[] = [];
  searchQuery: string = '';
  errorMessage: string = '';
  lawyerId: number = 0;

  constructor(
    private consultationService: ConsultationService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authService.currentUserId.subscribe({
      next: (id) => {
        if (id && id > 0) {
          this.lawyerId = id;
          this.loadConsultations(this.lawyerId);
        } else {
          this.errorMessage = 'No tienes permisos para acceder a estas solicitudes.';
        }
      },
      error: () => {
        this.errorMessage = 'Hubo un problema al obtener tu información de usuario.';
      }
    });
  }

  loadConsultations(lawyerId: number): void {
    this.consultationService.getConsultationsByLawyerId(lawyerId).subscribe({
      next: (data) => {
        this.consultations = data;
        this.filteredConsultations = data;
      },
      error: () => {
        this.errorMessage = 'Hubo un error al cargar las solicitudes de consulta.';
      }
    });
  }

  onSearch(): void {
    const trimmedQuery = this.searchQuery.trim().toLowerCase();
    if (!trimmedQuery) {
      this.filteredConsultations = this.consultations;
      return;
    }
    this.filteredConsultations = this.consultations.filter(
      (consultation) =>
        consultation.title.toLowerCase().includes(trimmedQuery) ||
        consultation.description.toLowerCase().includes(trimmedQuery)
    );
  }

  approveConsultation(consultationId: number): void {
    this.consultationService.approveConsultation(consultationId).subscribe({
      next: () => {
        alert('Consulta aprobada con éxito.');
        this.loadConsultations(this.lawyerId);
      },
      error: () => {
        this.errorMessage = 'Error al aprobar la solicitud.';
      }
    });
  }

  rejectConsultation(consultationId: number): void {
    this.consultationService.rejectConsultation(consultationId).subscribe({
      next: () => {
        alert('Consulta rechazada con éxito.');
        this.loadConsultations(this.lawyerId);
      },
      error: () => {
        this.errorMessage = 'Error al rechazar la solicitud.';
      }
    });
  }
}

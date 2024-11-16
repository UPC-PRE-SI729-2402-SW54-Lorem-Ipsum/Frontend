import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../../services/lawyer.service';
import { Lawyer } from '../../model/lawyer';

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent implements OnInit {
  lawyer: Lawyer = new Lawyer();
  name: string = '';
  searchQuery: string = '';
  consultations: any[] = [];
  filteredConsultations: any[] = [];

  constructor(private lawyerService: LawyerService) {}

  ngOnInit(): void {
    this.lawyerService.getLawyerById(2).subscribe((data: Lawyer) => {
      this.lawyer = data;
      this.name = `${this.lawyer.name} ${this.lawyer.lastname}`;
    });
    this.loadConsultations();
  }

  loadConsultations(): void {
    this.lawyerService.getConsultationsByLawyerId(2).subscribe((data: any[]) => {
      this.consultations = data;
      this.filteredConsultations = data;
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
    this.lawyerService
      .updateConsultationStatus(consultationId, 'APPROVED')
      .subscribe({
        next: () => {
          alert('Consulta aprobada con éxito.');
          this.loadConsultations();
        },
        error: (err) => console.error('Error al aprobar consulta:', err)
      });
  }

  rejectConsultation(consultationId: number): void {
    this.lawyerService
      .updateConsultationStatus(consultationId, 'REJECTED')
      .subscribe({
        next: () => {
          alert('Consulta rechazada con éxito.');
          this.loadConsultations();
        },
        error: (err) => console.error('Error al rechazar consulta:', err)
      });
  }
}

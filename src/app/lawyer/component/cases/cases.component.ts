import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../../services/lawyer.service';
import { AuthenticationService } from '../../../iam/services/authentication.service';
import { Case } from '../../model/case';
import { Lawyer } from '../../model/lawyer';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent implements OnInit {
  lawyerId: number = 0;
  lawyer: Lawyer = new Lawyer();
  searchQuery: string = '';
  cases: Case[] = [];
  filteredCases: Case[] = [];
  errorMessage: string = '';

  constructor(
    private lawyerService: LawyerService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authService.currentUserId.subscribe({
      next: (id) => {
        console.log('Retrieved lawyer ID:', id);
        if (id && id > 0) {
          this.lawyerId = id;
          this.loadLawyerDetails(this.lawyerId);
          this.loadConsultationsAndCases(this.lawyerId);
        } else {
          this.handleInvalidLawyerId();
        }
      },
      error: () => {
        this.errorMessage = 'Error retrieving user information.';
      },
    });
  }

  private handleInvalidLawyerId(): void {
    this.errorMessage = 'Invalid lawyer ID or unauthorized access.';
    console.error('Invalid lawyer ID:', this.lawyerId);
    alert('You are not authorized to access this resource. Please log in with the correct account.');
  }

  loadLawyerDetails(lawyerId: number): void {
    this.lawyerService.getLawyerById(lawyerId).subscribe({
      next: (lawyerData) => {
        this.lawyer = lawyerData;
      },
      error: () => {
        this.errorMessage = 'Error fetching lawyer details.';
      },
    });
  }

  loadConsultationsAndCases(lawyerId: number): void {
    this.lawyerService.getConsultationsByLawyerId(lawyerId).subscribe({
      next: (consultations) => {
        const caseRequests = consultations.map((consultation: any) =>
          this.lawyerService.getLegalCaseByConsultationId(consultation.id)
        );

        forkJoin(caseRequests).subscribe({
          next: (caseResponses) => {
            this.cases = caseResponses.flat();
            this.filteredCases = this.cases;
          },
          error: () => {
            this.errorMessage = 'Error fetching cases associated with consultations.';
          },
        });
      },
      error: () => {
        this.errorMessage = 'Error fetching consultations for lawyer.';
      },
    });
  }

  onSearch(): void {
    const trimmedQuery = this.searchQuery.trim();
    if (trimmedQuery === '') {
      this.filteredCases = this.cases;
      return;
    }
    this.filteredCases = this.cases.filter((c) =>
      c.title.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(trimmedQuery.toLowerCase())
    );
  }

  onSuggestionClick(suggestion: string): void {
    this.searchQuery = suggestion;
    this.onSearch();
  }
}

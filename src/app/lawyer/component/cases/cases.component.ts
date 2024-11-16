import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../../services/lawyer.service';
import { Lawyer } from '../../model/lawyer';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent implements OnInit {
  lawyer: Lawyer = new Lawyer();
  name: string = '';
  searchQuery: string = '';
  cases: any[] = [];
  filteredCases: any[] = [];

  constructor(private lawyerService: LawyerService) {}

  ngOnInit(): void {
    this.lawyerService.getLawyerById(2).subscribe({
      next: (data: Lawyer) => {
        this.lawyer = data;
        this.name = `${this.lawyer.name} ${this.lawyer.lastname}`;
      },
      error: (error) => {
        console.error('Error fetching lawyer data:', error);
      },
    });
    this.loadCases();
  }

  loadCases(): void {
    this.lawyerService.searchCasesByQuery('').subscribe({
      next: (data: any[]) => {
        console.log('Loaded cases:', data); // Verificar estructura
        this.cases = data;
        this.filteredCases = data;
      },
      error: (error) => {
        console.error('Error loading cases:', error);
      },
    });
  }

  onSearch(): void {
    const trimmedQuery = this.searchQuery.trim();
    if (trimmedQuery === '') {
      this.filteredCases = this.cases;
      console.log('Filtered cases reset to all cases:', this.filteredCases);
      return;
    }

    this.lawyerService.searchCasesByQuery(trimmedQuery).subscribe({
      next: (results: any[]) => {
        console.log('Search results:', results);
        this.filteredCases = results;
      },
      error: (error) => {
        console.error('Error fetching cases:', error);
      },
    });
  }

  onSuggestionClick(suggestion: string): void {
    this.searchQuery = suggestion;
    this.onSearch();
  }
}

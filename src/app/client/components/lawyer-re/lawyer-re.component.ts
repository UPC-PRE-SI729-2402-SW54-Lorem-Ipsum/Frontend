import { Component, OnInit } from '@angular/core';
import { LawyerService } from '../../../lawyer/services/lawyer.service';
import { Lawyer } from '../../../lawyer/model/lawyer';

@Component({
  selector: 'app-lawyer-re',
  templateUrl: './lawyer-re.component.html',
  styleUrls: ['./lawyer-re.component.css'],
})
export class LawyerReComponent implements OnInit {
  lawyers: Lawyer[] = [];
  currentIndex: number = 0;

  constructor(private lawyerService: LawyerService) {}

  ngOnInit(): void {
    this.lawyerService.getAllLawyers().subscribe({
      next: (resources: Lawyer[]) => {
        this.lawyers = resources.map((lawyer) => ({
          ...lawyer,
          last_case: lawyer.last_case || [],
        }));
      },
      error: () => {
        console.error('Error fetching lawyers');
      },
    });
  }

  nextLawyer(): void {
    if (this.currentIndex < this.lawyers.length - 1) {
      this.currentIndex++;
    }
  }

  prevLawyer(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get currentLawyer(): Lawyer {
    return this.lawyers[this.currentIndex];
  }
}


import {Component, OnInit} from '@angular/core';
import {LegalCase} from "../../model/legal-case.entity";
import {LegalCaseService} from "../../services/legal-case.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-review-legal-case',
  templateUrl: './review-legal-case.component.html',
  styleUrl: './review-legal-case.component.css'
})
export class ReviewLegalCaseComponent implements OnInit {
  legalCase: LegalCase = new LegalCase();
  showPopup = false;

  constructor(private legalCaseService: LegalCaseService, private router: Router) {}

  ngOnInit() {
    const legalCaseId = 1;
    this.legalCaseService.getLegalCaseById(legalCaseId).subscribe((data) => {
      this.legalCase = data;
    });
  }

  openRejectionPopup() {
    this.showPopup = true;
  }

  onRejectCase(confirmed: boolean) {
    this.showPopup = false;
    if (confirmed) {
      this.router.navigate(['/notifications']);
    }
  }

  seeProfile() {
    this.router.navigate(['/client-profile']);
  }

  acceptCase() {
    // this.router.navigate([`/legal-case/${this.legalCase.id}`]);
    this.router.navigate(['/view-legal-case']);

  }
}

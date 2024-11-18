import {Component, OnInit} from '@angular/core';
import {LegalCase} from "../../model/legal-case";
import {LegalCaseService} from "../../services/legal-case.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmCloseCaseComponent} from "../../components/confirm-close-case/confirm-close-case.component";

@Component({
  selector: 'app-view-legal-case-lawyer',
  templateUrl: './view-legal-case-lawyer.component.html',
  styleUrl: './view-legal-case-lawyer.component.css'
})
export class ViewLegalCaseLawyerComponent  implements OnInit {
  legalCase: LegalCase | null = null;
  showPopup = false;

  constructor(private legalCaseService: LegalCaseService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    const legalCaseId = 1;
    this.legalCaseService.getLegalCaseById(legalCaseId).subscribe((data) => {
      this.legalCase = data;
    });
  }

  goToDocuments() {
    /* this.router.navigate(['/legal-cases', this.legalCase.id, 'documents']); */
    this.router.navigate(['/documents']);
  }

  goToPayments() {
    this.router.navigate(['/payments']);
  }

  goToChatRoom() {
    this.router.navigate(['/chat-room']);
  }

  goToVideoCall() {
    this.router.navigate(['/video-call']);
  }

  goToAppointments(){
    this.router.navigate(['/appointments']);
  }

  openCloseCasePopup(action: 'close') {
    /*this.legalCaseService.closeLegalCase(this.legalCase.id).subscribe(() => {
      this.router.navigate(['/notifications']);
    });*/

    const dialogRef = this.dialog.open(ConfirmCloseCaseComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'close') {
        this.showPopup = true;
      }
    });

  }

}


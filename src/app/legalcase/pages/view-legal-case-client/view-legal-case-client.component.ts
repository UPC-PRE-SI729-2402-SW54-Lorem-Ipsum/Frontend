import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegalCaseService } from '../../services/legal-case.service';
import { LegalCase } from '../../model/legal-case';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmCloseCaseComponent } from '../../components/confirm-close-case/confirm-close-case.component';

@Component({
  selector: 'app-view-legal-case-client',
  templateUrl: './view-legal-case-client.component.html',
  styleUrls: ['./view-legal-case-client.component.css']
})
export class ViewLegalCaseClientComponent implements OnInit {
  legalCase: LegalCase | null = null;
  showPopup = false;

  constructor(
    private route: ActivatedRoute,
    private legalCaseService: LegalCaseService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const consultationId = +params['consultationId'];
      this.loadLegalCase(consultationId);
    });
  }

  loadLegalCase(consultationId: number) {
    this.legalCaseService.getLegalCaseByConsultationId(consultationId).subscribe((data) => {
      console.log(data);
      this.legalCase = data;
    });
  }

  goToDocuments() {
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

  goToAppointments() {
    this.router.navigate(['/appointments']);
  }

  openCloseCasePopup(action: 'close') {
    const dialogRef = this.dialog.open(ConfirmCloseCaseComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'close') {
        this.showPopup = true;
      }
    });
  }
}

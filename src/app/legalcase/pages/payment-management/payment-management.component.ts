import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddDocumentComponent} from "../../component/add-document/add-document.component";
import {AddPaymentComponent} from "../../component/add-payment/add-payment.component";

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrl: './payment-management.component.css'
})
export class PaymentManagementComponent {
  showPopup = false;

  constructor(private router: Router, private dialog: MatDialog) {
  }

  goBackToLegalCase() {
    this.router.navigate(['/view-legal-case']);
  }

  openAddDocumentDialog(action: 'add') {
    /*this.legalCaseService.closeLegalCase(this.legalCase.id).subscribe(() => {
      this.router.navigate(['/notifications']);
    });*/

    const dialogRef = this.dialog.open(AddPaymentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'add') {
        this.showPopup = true;
      }
    });

  }

}

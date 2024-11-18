import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddPaymentComponent} from "../add-payment/add-payment.component";

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrl: './payment-table.component.css'
})
export class PaymentTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  showPopup = false;

  constructor(private router: Router, private dialog: MatDialog) {
  }

  goBackToLegalCase() {
    this.router.navigate(['/view-legal-case']);
  }

  openAddPaymentDialog(action: 'add') {
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

import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddDocumentComponent} from "../../components/add-document/add-document.component";

@Component({
  selector: 'app-document-management',
  templateUrl: './document-management.component.html',
  styleUrl: './document-management.component.css'
})
export class DocumentManagementComponent {
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

    const dialogRef = this.dialog.open(AddDocumentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'add') {
        this.showPopup = true;
      }
    });

  }

}

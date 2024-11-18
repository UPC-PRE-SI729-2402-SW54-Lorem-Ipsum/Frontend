import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddDocumentComponent} from "../add-document/add-document.component";

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrl: './document-table.component.css'
})
export class DocumentTableComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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

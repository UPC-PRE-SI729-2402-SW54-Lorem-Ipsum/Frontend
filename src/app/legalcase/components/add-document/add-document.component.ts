import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrl: './add-document.component.css'
})
export class AddDocumentComponent {
  constructor(private dialogRef: MatDialogRef<AddDocumentComponent>,
              private router: Router) {}

  accept() {
    this.dialogRef.close('confirm');
  }

  cancel() {
    this.dialogRef.close('cancel');
  }

}

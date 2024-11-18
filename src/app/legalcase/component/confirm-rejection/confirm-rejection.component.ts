import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LegalCase} from "../../model/legal-case.entity";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-confirm-rejection',
  templateUrl: './confirm-rejection.component.html',
  styleUrl: './confirm-rejection.component.css'
})
export class ConfirmRejectionComponent {
 /* @Output() response = new EventEmitter<boolean>();

  accept() {
    this.response.emit(true);

  }

  cancel() {
    this.response.emit(false);
  }*/

  constructor(private dialogRef: MatDialogRef<ConfirmRejectionComponent>,
  private router: Router) {}

  accept() {
    this.dialogRef.close('confirm');
    this.router.navigate(['/notifications']);

  }

  cancel() {
    this.dialogRef.close('cancel');
  }
}

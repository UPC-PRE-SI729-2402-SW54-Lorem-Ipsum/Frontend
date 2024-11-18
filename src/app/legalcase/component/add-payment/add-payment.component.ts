import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrl: './add-payment.component.css'
})
export class AddPaymentComponent {
  constructor(private dialogRef: MatDialogRef<AddPaymentComponent>,
              private router: Router) {}

  accept() {
    this.dialogRef.close('confirm');
  }

  cancel() {
    this.dialogRef.close('cancel');
  }
}

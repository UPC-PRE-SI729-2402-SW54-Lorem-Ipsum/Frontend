import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-client',
  templateUrl: './sign-up-client.component.html',
  styleUrl: './sign-up-client.component.css'
})
export class SignUpClientComponent {
  constructor(private router: Router) {
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}

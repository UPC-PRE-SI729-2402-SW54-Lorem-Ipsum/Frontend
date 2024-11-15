import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-lawyer',
  templateUrl: './sign-up-lawyer.component.html',
  styleUrl: './sign-up-lawyer.component.css'
})
export class SignUpLawyerComponent {

  constructor(private router: Router) {
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}

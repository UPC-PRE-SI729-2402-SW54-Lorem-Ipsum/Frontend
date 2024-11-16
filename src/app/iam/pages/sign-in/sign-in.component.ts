import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {
  }

  // onSubmit() {
  //   this.router.navigate(['/home']);
  // }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}

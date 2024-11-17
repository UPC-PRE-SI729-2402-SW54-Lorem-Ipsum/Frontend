import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { SignInRequest } from '../../model/sign-in.request';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.signOut();
  }

  signIn() {
    const signInRequest = new SignInRequest(this.username, this.password);
    this.authService.signIn(signInRequest);
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }
}

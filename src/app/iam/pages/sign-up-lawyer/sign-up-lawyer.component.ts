import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { SignUpRequest } from '../../model/sign-up.request';

@Component({
  selector: 'app-sign-up-lawyer',
  templateUrl: './sign-up-lawyer.component.html',
  styleUrl: './sign-up-lawyer.component.css'
})
export class SignUpLawyerComponent {
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  address: string = '';
  dni: string = '';
  imageUrl: string = 'data:image/jpeg;base64,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';

  constructor(private router: Router, private authService: AuthenticationService) {}

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  signUp() {
    const signUpRequest = new SignUpRequest(
      this.email,
      this.password,
      ['LAWYER'],
      this.firstName,
      this.lastName,
      this.phoneNumber,
      this.address,
      this.dni,
      this.imageUrl
    );
    this.authService.signUp(signUpRequest);
  }
}

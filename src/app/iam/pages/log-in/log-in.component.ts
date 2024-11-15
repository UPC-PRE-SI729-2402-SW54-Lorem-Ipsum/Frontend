import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
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

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-toolbar',

  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  userRole: string = '';

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.authService.currentUserRole.subscribe((role) => {
      const match = role.match(/name=(\w+)/);
      if (match) {
        this.userRole = match[1];
      }
    });
  }
}

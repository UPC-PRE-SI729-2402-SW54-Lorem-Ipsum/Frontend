import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-case-information',
  templateUrl: './case-information.component.html',
  styleUrl: './case-information.component.css'
})
export class CaseInformationComponent {
  constructor(private router: Router) {  }

  ngOnInit() {
  }
  navegar(){
this.router.navigate(['/']);
  }

}

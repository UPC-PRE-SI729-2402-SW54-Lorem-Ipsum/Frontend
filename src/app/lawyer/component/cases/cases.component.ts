import {Component, OnInit} from '@angular/core';
import {Lawyer} from "../../model/lawyer";
import {LawyerService} from "../../services/lawyer.service";

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent implements OnInit {

  lawyer: Lawyer = new Lawyer();
  name: string = '';
  searchQuery: string = '';

  constructor(private lawyerService: LawyerService) {
  }

  ngOnInit(): void {
    this.lawyerService.getLawyerById(1).subscribe((data: any) => {
      this.lawyer = data[0];
      this.name = this.lawyer.name + ' ' + this.lawyer.lastname;
      console.log(this.lawyer);
    });
  }
}

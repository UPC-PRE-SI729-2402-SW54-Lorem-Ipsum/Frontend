import {Component, OnInit} from '@angular/core';
import {LawyerService} from "../../services/lawyer.service";
import {Lawyer} from "../../model/lawyer";


@Component({
  selector: 'app-lawyer-re',
  templateUrl: './lawyer-re.component.html',
  styleUrl: './lawyer-re.component.css'
})
export class LawyerReComponent implements OnInit {

  lawyers: Lawyer[] = [];
  currentIndex: number = 0;

  constructor(private lawyerService: LawyerService) {}

  ngOnInit(): void {
    this.lawyerService.getAllLawyers().subscribe((resources: any) => {
      this.lawyers = resources;
      console.log(this.lawyers);
    });
  }
  nextLawyer(): void {
    if (this.currentIndex < this.lawyers.length - 1) {
      this.currentIndex++;
    }
  }

  prevLawyer(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  get currentLawyer() {
    return this.lawyers[this.currentIndex];
  }
}

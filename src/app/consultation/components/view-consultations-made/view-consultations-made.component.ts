import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultationService } from '../../services/consultation.service';
import { Consultation } from '../../model/consultation';
import {AuthenticationService} from "../../../iam/services/authentication.service";

@Component({
  selector: 'app-view-consultations-made',
  templateUrl: './view-consultations-made.component.html',
  styleUrls: ['./view-consultations-made.component.css']
})
export class ViewConsultationsMadeComponent implements OnInit {
  consultations: Consultation[] = [];
  lawyerId: number = 0;
  clientId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private consultationService: ConsultationService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.lawyerId = +params['lawyerId'];
    });
    this.authService.currentUserId.subscribe(id => {
      this.clientId = id;
    });
    this.consultationService.getAllConsultationsByLawyerIdAndClientId(this.lawyerId, this.clientId)
      .subscribe(consultations => this.consultations = consultations);
  }
}

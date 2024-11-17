import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lawyer } from '../model/lawyer';
import { Case } from '../model/case';

@Injectable({
  providedIn: 'root',
})
export class LawyerService {
  baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getLawyerById(lawyerId: number): Observable<Lawyer> {
    return this.http.get<Lawyer>(`${this.baseUrl}/lawyers/${lawyerId}`);
  }

  getAllLawyers(): Observable<Lawyer[]> {
    return this.http.get<Lawyer[]>(`${this.baseUrl}/lawyers`);
  }

  getConsultationsByLawyerId(lawyerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/consultation/lawyerId/${lawyerId}`);
  }

  getLegalCaseByConsultationId(consultationId: number): Observable<Case[]> {
    return this.http.get<Case[]>(`${this.baseUrl}/legal_cases/consultation/${consultationId}`);
  }
}

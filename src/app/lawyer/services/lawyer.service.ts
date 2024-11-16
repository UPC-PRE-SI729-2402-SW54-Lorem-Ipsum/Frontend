import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lawyer } from '../model/lawyer';

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

  searchCasesByQuery(query: string): Observable<any[]> {
    const params = new HttpParams().set('search', query);
    return this.http.get<any[]>(`${this.baseUrl}/legal_cases`, { params });
  }

  getConsultationsByLawyerId(lawyerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/consultation/lawyerId/${lawyerId}`);
  }

  updateConsultationStatus(consultationId: number, status: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/consultation/${consultationId}`, { status });
  }

  approveConsultation(consultationId: number): Observable<any> {
    return this.updateConsultationStatus(consultationId, 'APPROVED');
  }

  rejectConsultation(consultationId: number): Observable<any> {
    return this.updateConsultationStatus(consultationId, 'REJECTED');
  }

  addLawyerType(lawyerId: number, lawyerTypeId: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/lawyers/type`, { lawyerId, lawyerTypeId });
  }

  addLawyerPrice(lawyerId: number, price: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/lawyers/prices`, { lawyerId, price });
  }
}

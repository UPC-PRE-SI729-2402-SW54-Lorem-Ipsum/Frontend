import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  private baseUrl = 'http://localhost:8080/api/v1/consultation';

  constructor(private http: HttpClient) {}

  getConsultationsByLawyerId(lawyerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/lawyerId/${lawyerId}`);
  }

  approveConsultation(consultationId: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/approve/${consultationId}`, {});
  }

  rejectConsultation(consultationId: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/reject/${consultationId}`, {});
  }
}

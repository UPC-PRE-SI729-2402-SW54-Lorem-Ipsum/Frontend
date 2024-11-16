import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private baseUrl = 'http://localhost:8080/api/v1/notification';

  constructor(private http: HttpClient) {}

  getNotificationsByClientId(clientId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/client/${clientId}`);
  }

  getNotificationsByConsultationId(consultationId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/legal-case/${consultationId}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<any[]>(`${this.baseUrl}/legal_cases`, {
      params: query ? { search: query } : {},
    });
  }
}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lawyer } from '../model/lawyer';
import { environment } from '../../../enviroment/enviroment';

@Injectable({
  providedIn: 'root',
})
export class LawyerService {
  private baseUrl = `${environment.serverBasePath}/lawyers`;

  constructor(private http: HttpClient) {}

  getLawyerById(lawyerId: number): Observable<Lawyer> {
    return this.http.get<Lawyer>(`${this.baseUrl}/Id/${lawyerId}`);
  }

  getAllLawyers(): Observable<Lawyer[]> {
    return this.http.get<Lawyer[]>(this.baseUrl);
  }
}

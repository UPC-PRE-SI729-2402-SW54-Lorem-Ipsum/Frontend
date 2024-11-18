import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {LegalCase} from "../model/legal-case.entity";
import {catchError, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LegalCaseService {
  private basePath = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getAllLegalCases() {
    return this.http.get<LegalCase[]>(`${this.basePath}/legal_cases`);
  }

  createLegalCase(legalCase: LegalCase) {
    return this.http.post<LegalCase>(`${this.basePath}/legal_cases`, legalCase)
      .pipe(retry(2), catchError(this.handleError));
  }

  getLegalCaseById(legalCaseId: number) {
    return this.http.get<LegalCase>(`${this.basePath}/legal_cases/${legalCaseId}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getLegalCaseByConsultationId(consultationId: number) {
    return this.http.get<LegalCase>(`${this.basePath}/legal_cases/consultation/${consultationId}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  closeLegalCase(legalCaseId: number) {
    return this.http.patch<LegalCase>(`${this.basePath}/legal_cases/close/${legalCaseId}`, {})
      .pipe(retry(2), catchError(this.handleError));
  }

}

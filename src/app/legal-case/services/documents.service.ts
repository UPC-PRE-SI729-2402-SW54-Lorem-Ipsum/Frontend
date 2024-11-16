import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

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

  getAllDocuments() {
    return this.http.get<Document[]>(`${this.basePath}/documents`);
  }

  createDocument(document: Document) {
    return this.http.post<Document>(`${this.basePath}/documents`, document)
        .pipe(catchError(this.handleError));
  }

  getDocumentById(documentId: number): Observable<Document> {
    return this.http.get<Document>(`${this.basePath}/documents/${documentId}`)
        .pipe(catchError(this.handleError));
  }


}

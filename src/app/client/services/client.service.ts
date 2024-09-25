import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getClientById(clientId: number) {
    return this.http.get(`${this.baseUrl}/clients?id=${clientId}`);
  }

  getCurrentClient() {
    return this.http.get(`${this.baseUrl}/clients/current`);
  }
}

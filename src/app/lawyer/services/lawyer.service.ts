import { Injectable } from '@angular/core';
import {Lawyer} from "../../profiles/lawyers/model/lawyer";
import {BaseService} from "../../shared/services/base.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LawyerService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getAllLawyers() {
    return this.http.get(`${this.baseUrl}/lawyers`);
  }

  getLawyerById(lawyerId: number) {
    return this.http.get(`${this.baseUrl}/lawyers?id=${lawyerId}`);
  }
}

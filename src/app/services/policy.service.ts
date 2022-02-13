import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PolicyResponseModel } from '../models/policyResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  apiUrl: string = "https://localhost:44336";

  constructor(private httpClient: HttpClient) { }
  getAllPolicies(): Observable<PolicyResponseModel> {
    return this.httpClient.get<PolicyResponseModel>(`${this.apiUrl}/Policy/getall`);

  }
}

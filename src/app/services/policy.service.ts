import { SalePolicy } from './../models/salePolicy';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  apiUrl: string = "https://localhost:44336/api";

  constructor(private httpClient: HttpClient) { }
  getAllPolicies(): Observable<ListResponseModel<Policy>> {
    return this.httpClient.get<ListResponseModel<Policy>>(`${this.apiUrl}/Policy/getall`);
  }

  getPoliciesByMail(email: string): Observable<ListResponseModel<SalePolicy>> {
    return this.httpClient.get<ListResponseModel<SalePolicy>>(`${this.apiUrl}/Sale/getSoldPoliciesByEmail?email=${email}`);
  }

}

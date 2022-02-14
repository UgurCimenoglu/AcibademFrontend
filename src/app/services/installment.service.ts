import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Installment } from '../models/installment';

@Injectable({
  providedIn: 'root'
})
export class InstallmentService {

  apiUrl: string = "https://localhost:44336/api";

  constructor(private httpClient: HttpClient) { }
  getAllPolicies(): Observable<ListResponseModel<Installment>> {
    return this.httpClient.get<ListResponseModel<Installment>>(`${this.apiUrl}/Installment/getall`);
  }
}

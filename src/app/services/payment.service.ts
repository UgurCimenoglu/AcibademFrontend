import { Observable } from 'rxjs';
import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaleQuery } from '../models/SaleQuery';
import { SaleGuid } from '../models/SaleGuid';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl: string = "https://localhost:44336/api";

  constructor(private httpClient: HttpClient) { }

  add(saleQuery: SaleQuery): Observable<SingleResponseModel<string>> {
    return this.httpClient.post<SingleResponseModel<string>>(`${this.apiUrl}/Sale/AddSalesQuery`, saleQuery);
  }

  pay(saleGuid: SaleGuid): Observable<SingleResponseModel<any>> {
    return this.httpClient.post<SingleResponseModel<any>>(`${this.apiUrl}/Sale/Pay`, saleGuid);
  }
}

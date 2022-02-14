import { SalePolicy } from './../models/salePolicy';
import { ListResponseModel } from './../models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrl: string = "https://localhost:44336/api";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<SalePolicy>> {
    return this.httpClient.get<ListResponseModel<SalePolicy>>(`${this.apiUrl}/Sale/GetAllSales`);
  }

  

}

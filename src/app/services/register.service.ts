import { SingleResponseModel } from './../models/singleResponseModel';
import { Observable } from 'rxjs';
import { Register } from './../models/register';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl: string = "https://localhost:44336/api";
  constructor(private httpClient: HttpClient) { }

  register(register: Register): Observable<SingleResponseModel<any>> {
    return this.httpClient.post<SingleResponseModel<any>>(`${this.apiUrl}/Auth/register`, register);
  }
}

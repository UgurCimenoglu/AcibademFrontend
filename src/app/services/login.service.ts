import { Token } from './../models/token';
import { SingleResponseModel } from './../models/singleResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "https://localhost:44336/api";
  constructor(private httpClient: HttpClient) { }

  login(login: Login): Observable<SingleResponseModel<Token>> {
    return this.httpClient.post<SingleResponseModel<Token>>(`${this.apiUrl}/Auth/login`, login);
  }

  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }
}

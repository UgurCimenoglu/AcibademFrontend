import { User } from './../models/user';
import { Observable } from 'rxjs';
import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: string = "https://localhost:44336/api";
  constructor(private httpClient: HttpClient) { }

  getByMail(email: string): Observable<SingleResponseModel<User>> {
    let newPath = `${this.apiUrl}/User/getbymail?email=${email}`;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
  }

  
}

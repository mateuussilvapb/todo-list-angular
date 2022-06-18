import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

// ======================================= //
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // ======================================= //
  constructor(private http: HttpClient) {}
  // ======================================= //
  API_URL =
    'https://sheet.best/api/sheets/084dc25f-a5c7-4917-9443-4c2149e4896b';
  // ======================================= //
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Token: '123654789',
    }),
  };
  // ======================================= //
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}`);
  }
  // ======================================= //
  postUsers(user: User) {
    return this.http.post<User>(`${this.API_URL}`, user, {
      observe: 'response',
      responseType: 'json',
    });
  }
  // ======================================= //
}

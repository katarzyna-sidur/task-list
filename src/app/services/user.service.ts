import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  saveUser(user: User): Observable<User[]> {
      return this.httpClient.post<User[]>('http://localhost:3000/users', user, {
          headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
      });
  }
}

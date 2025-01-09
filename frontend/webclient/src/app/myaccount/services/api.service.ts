import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Authentication, User } from '../models/auth.interface';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  constructor(private http: HttpClient) {} 
  
  
  userList(){
    this.http.get('/api/private/userlist', {responseType: 'json'} )
    .subscribe(response => {
        console.log(response);
    })
  }

  authenticate(username: string, password: string): Observable<Authentication>{
    return this.http.post<Authentication>('/api/public/authenticate', {'username': username, 'password': password});
  }

  signup(user: User){
    return this.http.post<Authentication>('/api/public/signup', user);
  }
}
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models/users.models';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  http: HttpClient = inject(HttpClient)
  baseUrl = environment.serverUrl

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/current`)
  }
  
}

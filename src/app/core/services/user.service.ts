import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/app.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpClient = inject(HttpClient);
  private readonly baseUrl = inject(BASE_URL);

  constructor() {}

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/login`, {
      username,
      password,
    });
  }
}

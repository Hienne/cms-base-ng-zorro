import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';
import { BASE_URL } from 'src/app/app.module';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);
  private readonly baseUrl = inject(BASE_URL);
  
  constructor() {}

  getTodos(page: number, limit: number): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(
      `${this.baseUrl}/todos?_page=${page}&_limit=${limit}`
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    baseUrl = 'http://localhost:3000/tasks';

    constructor(private httpClient: HttpClient) { }

    saveTask(task: Task): Observable<Task> {
        return this.httpClient.post<Task>(this.baseUrl, task, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    getTasks(): Observable<Task[]> {
        return this.httpClient.get<Task[]>(this.baseUrl);
    }

    updateTask (task: Task): Observable<Task> {
        return this.httpClient.put<Task>(`${this.baseUrl}/${task.id}`, task, {
             headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }


}

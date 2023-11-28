import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  private apiUrl = 'http://localhost:3000/admin';
  private api = 'http://localhost:3000/signup';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deletePersons(id: number): Observable<any> {
    const abc = `${this.apiUrl}/${id}`;
    return this.http.delete(abc);
  }

  postAllPersons(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updatePersons(id: number, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data);
  }

  getById(userId: number) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

  // signup

  postAll(data: any): Observable<any> {
    return this.http.post(this.api, data);
  }

  getAll(): Observable<any> {
    return this.http.get(this.api);
  }

  updateStatus(userId: number, newStatus: string): Observable<any> {
    const updateStatusUrl = `${this.api}/${userId}`;
    return this.http.patch(updateStatusUrl, { status: newStatus });
  }

  deleteUsers(id: number): Observable<any> {
    const abc = `${this.api}/${id}`;
    return this.http.delete(abc);
  }
}

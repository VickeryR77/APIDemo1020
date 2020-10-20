import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  constructor(private http: HttpClient) { }

  apiUrl = '/api/employees';

  getEmployees() {
    return this.http.get(this.apiUrl);
  }



}

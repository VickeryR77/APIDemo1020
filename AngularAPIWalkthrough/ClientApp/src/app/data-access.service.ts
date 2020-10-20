import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  constructor(private http: HttpClient) { }

  apiUrl = '/api/employees';

  //GetAll
  getEmployees() {
    return this.http.get(this.apiUrl);
  }

  //GetOne
  getEmployee(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  //Post | for creating, but uses same API call as update.
  createEmployee(emp) {
    return this.http.post<Employee>(this.apiUrl, emp);
  }

  //Updating, these could be one function, maybe call it save?
  updateEmployee(emp) {
    return this.http.post<Employee>(this.apiUrl, emp);
  }


}

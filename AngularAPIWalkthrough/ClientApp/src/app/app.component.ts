import { Component } from '@angular/core';
import { DataAccessService } from './data-access.service';
import { Employee } from './interfaces/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(private dal: DataAccessService) { }

  clickGetAll() {
    this.dal.getEmployees().subscribe(
      (data) => {
        console.log('All Employees Gotten');
        console.log(data);
      }
    );
  }

  clickGetOne() {
    this.dal.getEmployee(5).subscribe(
      (data) => {
        console.log('One Employee Gotten');
        console.log(data);
      }
    );
  }

  clickCreateOne() {
   let emp = {
      FirstName: 'Thomas',
      LastName: 'Jefferson',
      Department: 'Management',
      Salary: 100000
    }

    this.dal.createEmployee(emp).subscribe(
      (data) => {
        console.log('One Employee Created');
        console.log(data);
      }
    );
  }

  clickUpdateOne() {
    let emp = {
      id: 5,
      FirstName: 'Ringo',
      LastName: 'Star',
      Department: 'Music',
      Salary: 50000
    }

    this.dal.updateEmployee(emp).subscribe(
      (data) => {
        console.log('One Employee Updated');
        console.log(data);
      }
    );
  }

}

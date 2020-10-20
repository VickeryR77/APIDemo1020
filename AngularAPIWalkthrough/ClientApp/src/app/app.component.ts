import { Component } from '@angular/core';
import { DataAccessService } from './data-access.service';

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
        console.log('All Employees');
        console.log(data);
      }
    );
  }
}

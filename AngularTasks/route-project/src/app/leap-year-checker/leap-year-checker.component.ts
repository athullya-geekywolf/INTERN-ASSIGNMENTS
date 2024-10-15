import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-leap-year-checker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './leap-year-checker.component.html',
  styleUrl: './leap-year-checker.component.scss'
})
export class LeapYearCheckerComponent {
  year: number | undefined;
  result: string = '';

  checkLeapYear = () => {
    if (this.year) {
      const isLeap = (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
      this.result = `The year ${this.year} is ${isLeap ? 'a leap year.' : 'not a leap year.'}`;
    } else {
      this.result = 'Please enter a valid year.';
    }
  };

}

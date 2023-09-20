import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-year-navbar',
  templateUrl: './year-navbar.component.html',
  styleUrls: ['./year-navbar.component.scss']
})
export class YearNavbarComponent {
  @Input() yearList!:string [];
  @Input() chosenYear!:string;

  chooseYear(yearId:string){
    this.chosenYear = yearId;
    // const allOptions = document.querySelectorAll('li');

    // allOptions.forEach((option) => {
    //   if (option.id != yearId) {
    //     option.classList.remove('chosen');
    //   }
    // });

    // const toggledOption = document.getElementById(yearId);
    // if (toggledOption) {
    //   toggledOption.classList.add('chosen');
    // }
  }
}

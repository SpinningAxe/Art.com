import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title:string ="home"

  yearList = ["2019","2020","2021","2022","2023"]

  chosenYear:string = this.yearList[this.yearList.length-1];
  
  pictureDisplay = []  
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-dispplay',
  templateUrl: './picture-dispplay.component.html',
  styleUrls: ['./picture-dispplay.component.scss']
})
export class PictureDispplayComponent {
  @Input() chosenYear!:string;
  cardList = ["","","","","","","","","","","","","","",]
}

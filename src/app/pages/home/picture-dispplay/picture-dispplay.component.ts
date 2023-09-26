import { Component, Input } from '@angular/core';

interface cardInfo {
  readonly name: string;
  // date?: Date;
  readonly img: string;
}

@Component({
  selector: 'app-picture-dispplay',
  templateUrl: './picture-dispplay.component.html',
  styleUrls: ['./picture-dispplay.component.scss'],
})
export class PictureDispplayComponent {
  @Input() chosenYear!: string;
  public cardList: cardInfo[] = [
    { name: 'The Good', img: '' },
    { name: 'The Bad', img: '' },
    { name: 'The Evil', img: '' },
    { name: 'The Ugly', img: '' },
    { name: 'The Good', img: '' },
    { name: 'The Bad', img: '' },
    { name: 'The Evil', img: '' },
    { name: 'The Ugly', img: '' },
    { name: 'The Good', img: '' },
    { name: 'The Bad', img: '' },
    { name: 'The Evil', img: '' },
    { name: 'The Ugly', img: '' },
    { name: 'The Good', img: '' },
    { name: 'The Bad', img: '' },
    { name: 'The Evil', img: '' },
    { name: 'The Ugly', img: '' },
  ];

  currentCard:cardInfo={name:'',img:''}
  
  openModal(card:cardInfo) {
    this.currentCard = card

    let modal = document.getElementById('myModal');
    modal!.style.display = 'flex';
  }

  xCloseModal() {
    let modal = document.getElementById('myModal');
    modal!.style.display = 'none';
  }

  nextModal(currentCard:cardInfo){
    let index = this.cardList.indexOf(currentCard)
    if(index == this.cardList.length-1){
      index = -1
    }
    this.currentCard = this.cardList[index+1]
  }

  backModal(currentCard:cardInfo){
    let index = this.cardList.indexOf(currentCard)
    if(index == 0){
      index = this.cardList.length
    }
    this.currentCard = this.cardList[index-1]
  }
}

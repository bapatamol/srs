import { Component } from '@angular/core';
import { card } from '../card.model';
import { SrsHttp } from '../srshttp.service';


@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent  {
  title = 'srs';
  cardText: string;
  loadedSRSCards: card [] 
  cardIndex : number;

  constructor(private httpHelper: SrsHttp) {
    this.loadSRSDataFromServer();
    this.cardIndex = 0;
  } 
  
  onCardFlip() {
    this.cardText = this.cardText === this.loadedSRSCards[this.cardIndex].clue ? 
            this.loadedSRSCards[this.cardIndex].answer : this.loadedSRSCards[this.cardIndex].clue;
  }

  onYes() { 
    console.log("yes");
    this.loadedSRSCards[this.cardIndex].srslocation = "+";
    this.moveToNextCard();
  }

  onNo() { 
    console.log("no");
    this.loadedSRSCards[this.cardIndex].srslocation = "-";
    this.moveToNextCard();
  }

  moveToNextCard() {
    if (this.cardIndex === this.loadedSRSCards.length - 1) {
      if (!confirm("You are done for the day!")) {
        this.cardIndex = 0;
        this.cardText = this.loadedSRSCards[this.cardIndex].clue;
        return;
      } else {
        console.log(this.loadedSRSCards);
        return;
      }
    }
    this.cardIndex++;
    this.cardText = this.loadedSRSCards[this.cardIndex].clue;
  }

  loadSRSDataFromServer() {
    this.httpHelper.loadSRSDataFromServer()
        .subscribe( getData => {
          this.loadedSRSCards = getData;
          this.cardText = this.loadedSRSCards[0].clue;
        })
    }
}

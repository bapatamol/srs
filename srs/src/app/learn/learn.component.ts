import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { card } from '../card.model';


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

  constructor(private http: HttpClient) {
    this.loadSRSDataFromServer();
    this.cardIndex = 0;
  } 
  
  onCardFlip() {
    this.cardText = this.cardText === this.loadedSRSCards[this.cardIndex].clue ? 
            this.loadedSRSCards[this.cardIndex].answer : this.loadedSRSCards[this.cardIndex].clue;
  }

  loadSRSDataFromServer() {
    this.http.get<card[]>("http://bapatamol.alwaysdata.net/srs/get.php")
    .subscribe( getData => {
      this.loadedSRSCards = getData;
      this.cardText = this.loadedSRSCards[0].clue;
    })
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
}

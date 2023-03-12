import { Component } from '@angular/core';
import { card } from '../card.model';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  title = 'srs';
  cardText: string;
  c: card

  constructor() {
    this.c = new card("Gautam", "Bapat");
    this.cardText = this.c.question;
  } 
  
  onCardFlip() {
    this.cardText = this.cardText === this.c.question ? this.c.answer : this.c.question;
  }

}

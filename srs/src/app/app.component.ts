import { Component } from '@angular/core';

import { card } from "./card.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srs';
  cardText: string;
  c: card;

  constructor() {
    this.c = new card("question1", "answer1");
    this.cardText = this.c.question;
  }
  
  onCardFlip() {
    this.cardText = this.cardText === this.c.question ? this.c.answer : this.c.question;
  }
}

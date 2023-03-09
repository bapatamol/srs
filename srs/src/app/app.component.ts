import { Component} from '@angular/core';

import { card } from "./card.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'srs';
  cards: Array<card>;

  constructor() {
    this.cards = [];
    this.cards.push(new card("question1", "answer1"));

  }
}

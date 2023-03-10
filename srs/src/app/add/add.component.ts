import { Component, ElementRef, ViewChild } from '@angular/core';
import { card } from '../card.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  c: card;
  @ViewChild('question', {static: true}) question: ElementRef;
  @ViewChild('answer', {static: true}) answer: ElementRef;

  addCard() {
    
  }
}

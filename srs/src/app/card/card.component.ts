import { Component, Input} from '@angular/core';
import { throwIfEmpty } from 'rxjs';
import { card } from '../card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() qOrA: string;

  constructor() {
  }

}

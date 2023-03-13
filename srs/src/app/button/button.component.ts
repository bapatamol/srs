import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string;
  @Output() cardFlipped = new Subject<void>();
  @Output() goToNext = new Subject<void>();


  flip () {
    // flips card in learn
    this.cardFlipped.next();
  }

  buttonClicked() {
    switch (this.name) {
      case "Yes": this.recordYes(); break;
      case "No": this.recordNo(); break;
      case "Flip": this.flip(); break;
    }
  }
  setClass() {
      switch (this.name) {
        case "Yes": return "btn-success";
        case "No" : return "btn-danger";
        case "Flip": 
        case "Add": return "btn-primary";
      }
  }

  recordYes() {
    this.goToNext.next();

  }

  recordNo() { 
    this.goToNext.next();
  }

}


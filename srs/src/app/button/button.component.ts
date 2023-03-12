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


  flip () {
    // flips card in learn
    this.cardFlipped.next();
  }

  buttonClicked() {
    switch (this.name) {
      case "Yes": alert("I know the answer, push further back"); break;
      case "No": alert ("I do not recall, bring forward"); break;
      case "Flip": this.flip(); break;
    }
  }
  setClass() {
      switch (this.name) {
        case "Yes": return "btn btn-success";
        case "No" : return "btn btn-danger";
        case "Flip": 
        case "Add": return "btn btn-primary";
      }
  }

}


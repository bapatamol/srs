import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() name: string;
  @Output() flipEvent = new EventEmitter();


  flip () {
    this.flipEvent.emit();
  }

  handleOnClick() {
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
        case "Flip": return "btn btn-primary";
      }
  }

}


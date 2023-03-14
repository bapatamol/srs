import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SrsHttp } from '../srshttp.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  isCardAdded: boolean = false;

  constructor(private httpHelp: SrsHttp) {

  }

  addCard(data: NgForm) {
    this.httpHelp.addCard(data.value)
    .subscribe(respData =>  {
      this.isCardAdded = true;
      data.reset();
    });;
  }
}

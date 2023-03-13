import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private http : HttpClient) {

  }

  addCard(data: NgForm) {
    this.http.post ("http://bapatamol.alwaysdata.net/srs/add.php", data.value)
    .subscribe(responseData => {
      console.log(responseData);
    }) 
  }

}

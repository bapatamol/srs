import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('learnTab', {static: true}) learnTab: ElementRef;
  @ViewChild('addTab', {static: true}) addTab: ElementRef;

  learnStyle: string;
  addStyle: string;


  routeToLearn() {
    this.learnStyle = "tab is-selected";
    this.addStyle = "tab";
  }

  routeToAdd() {
    this.learnStyle = "tab";
    this.addStyle = "tab is-selected";
  }

  ngOnInit() {
    this.learnStyle = "tab is-selected";
    this.addStyle = "tab";
  }


 
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  learnTabStyle: string;
  addTabStyle: string;

  fixLearnTabStyle() {
    this.learnTabStyle = "tab is-selected";
    this.addTabStyle = "tab";
  }

  fixAddTabStyle() {
    this.learnTabStyle = "tab";
    this.addTabStyle = "tab is-selected";
  }

  ngOnInit() {
    this.learnTabStyle = "tab is-selected";
    this.addTabStyle = "tab";
  } 
}

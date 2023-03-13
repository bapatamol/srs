import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { card } from './card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  learnTabStyle: string;
  addTabStyle: string;
  

  constructor(private http: HttpClient) {}

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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SrsHttp } from './srshttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  learnTabStyle: string;
  addTabStyle: string;
  loggedInUser: boolean = false;

  constructor(private httpHelp: SrsHttp, private router: Router) {}

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
    this.httpHelp.loginComplete.subscribe(respData => {
      respData.status === "success" ? this.loggedInUser = true : this.loggedInUser = false;
      this.router.navigate(["/learn"]);
    });
  } 

  
}

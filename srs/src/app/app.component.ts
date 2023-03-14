import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SrsHttp } from './srshttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  learnTabStyle: string;
  addTabStyle: string;
  loginSub: Subscription;
  isAuthenticated = false;

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
    this.loginSub = this.httpHelp.loginComplete.subscribe(respData => {
      respData.status === "success" ? this.httpHelp.isAuthenticated = true : this.httpHelp.isAuthenticated = false;
      this.isAuthenticated = this.httpHelp.isAuthenticated;
      this.router.navigate(["/learn"]);
    });
  } 

  ngOnDestory() {
    this.loginSub.unsubscribe();
  }
  
}

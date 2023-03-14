import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SrsHttp } from '../srshttp.service';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private httpHelp: SrsHttp) { }

  login(loginForm: NgForm) {
    const x = {username : loginForm.value.username, password : CryptoJS.SHA1(loginForm.value.password).toString()};
    console.log(x);
    this.httpHelp.login(x);
  }

}

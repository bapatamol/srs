import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { LearnComponent } from './learn/learn.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'learn', canActivate: [LoginGuard], component: LearnComponent},
  { path: 'add', canActivate: [LoginGuard], component: AddComponent},
  { path: '**', redirectTo : '/login', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    LearnComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

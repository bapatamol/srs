import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './learn/learn.component';
import { AddComponent } from './add/add.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/learn', pathMatch: 'full'},
  { path: 'learn', component: LearnComponent},
  { path: 'add', component: AddComponent},
  { path: '**', redirectTo : '/learn', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    LearnComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';

import {QuestionDetailComponent} from './question/question-detail.component';
import {AnswerFormComponent} from './answer/answer-form.component';

import {SigninScreenComponent} from './auth/signin-screen.component';
import {SignupScreenComponent} from './auth/signup-screen.component';
import {QuestionListComponent} from './question/question-list.component';
import {QuestionFormComponent} from './question/question-form.component';

import { MomentModule } from 'angular2-moment';



@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SelectexamComponent } from './selectexam/selectexam.component';
import { ReportComponent } from './report/report.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { QuestionpaperComponent } from './questionpaper/questionpaper.component';
import { AdminreportComponent } from './adminreport/adminreport.component';
import { SearchComponent } from './search/search.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    UserloginComponent,
    AdminpageComponent,
    RegisterpageComponent,
    UserpageComponent,
    ForgotpasswordComponent,
    SelectexamComponent,
    ReportComponent,
    InstructionsComponent,
    QuestionpaperComponent,
    AdminreportComponent,
    SearchComponent,
    ConfirmpasswordComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

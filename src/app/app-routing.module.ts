import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent} from './userlogin/userlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RegisterpageComponent} from './registerpage/registerpage.component';
import { UserpageComponent} from './userpage/userpage.component';
import { ForgotpasswordComponent} from './forgotpassword/forgotpassword.component'
import { SelectexamComponent} from './selectexam/selectexam.component';
import {ReportComponent} from './report/report.component';
import {InstructionsComponent} from './instructions/instructions.component';
import { QuestionpaperComponent } from './questionpaper/questionpaper.component';
import { AdminreportComponent } from './adminreport/adminreport.component';
import {SearchComponent } from './search/search.component';
import { ConfirmpasswordComponent } from './confirmpassword/confirmpassword.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'login1',component:AdminloginComponent},
  {path:'login2',component:UserloginComponent},
  {path:'login3',component:RegisterpageComponent},
  {path:'login4',component:AdminpageComponent},
  {path:'login5',component:UserpageComponent},
  {path:'ForgotPassword',component:ForgotpasswordComponent},
  {path:'SelectExam',component:SelectexamComponent},
  {path:'Report',component:ReportComponent},
  {path:'Instruction',component:InstructionsComponent},
  {path:'QuestionPaper',component:QuestionpaperComponent},
  {path:'AdminReport',component:AdminreportComponent},
  {path:'SearchReport',component:SearchComponent},
  {path:'ConfirmPassword',component:ConfirmpasswordComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

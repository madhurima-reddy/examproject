import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent} from './userlogin/userlogin.component';
const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'login1',component:AdminloginComponent},
  {path:'login2',component:UserloginComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

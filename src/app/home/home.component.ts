import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image1:string = "/assets/Admin-Login.png";

  image2:string = "/assets/user-login.png";

  constructor() { }

  ngOnInit(): void {
  }

}

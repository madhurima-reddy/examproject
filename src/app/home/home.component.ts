import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image1:string = "/assets/adminimg.png";

  image2:string = "/assets/userimg.png";

  constructor() { }

  ngOnInit(): void {
  }

}

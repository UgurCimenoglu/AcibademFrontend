import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  array = [
    { index:1, img:"https://www.bupaacibadem.com.tr/media/5572/9nisan_bas.jpg" }, 
    { index:1, img:"https://www.bupaacibadem.com.tr/media/5590/boi_bupa.jpg" }, 
    { index:1, img:"https://www.bupaacibadem.com.tr/media/5595/bs-butonsuz.jpeg" }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}

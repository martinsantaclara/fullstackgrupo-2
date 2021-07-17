import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    console.log(screen.availHeight);
    console.log(screen.availWidth);
    console.log(window.screenY);
    console.log(window.screenX);

  }

}

import { Component, OnInit, Renderer2 } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit(): void {

    const imagenFondo = document.getElementById('imagenFondo');
    const footer = document.getElementById('footer');
    const topFooter = imagenFondo?.clientHeight! - 50;
    this.render.setStyle(footer,'top',`${topFooter}px`);

    AOS.init();
  }

}

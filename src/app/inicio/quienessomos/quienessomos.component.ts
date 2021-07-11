import { Component, OnInit, Renderer2 } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit(): void {

    AOS.init();

    const imagenCarrusel = document.getElementsByClassName('claseImagenCarrusel');
    const carrusel = document.getElementById('carousel');
    this.render.addClass(carrusel,'dark');
    for (var i = 0; i < imagenCarrusel.length; i++) {
      this.render.setStyle(imagenCarrusel[i],'height','138vh');
    }
  }
}

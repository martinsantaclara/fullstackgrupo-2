import { Component, OnInit, Renderer2 } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.component.html',
  styleUrls: ['./beneficios.component.css']
})
export class BeneficiosComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit(): void {

    Aos.init();

    const imagenCarrusel = document.getElementsByClassName('claseImagenCarrusel');
    const carrusel = document.getElementById('carousel');
    this.render.addClass(carrusel,'dark');
    for (var i = 0; i < imagenCarrusel.length; i++) {
      this.render.setStyle(imagenCarrusel[i],'height','100vh');
    }
  }

}

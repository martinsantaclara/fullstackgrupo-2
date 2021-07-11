import { Component, OnInit, Renderer2 } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.css']
})
export class BilleteraComponent implements OnInit {

  list = ['Qué es una billetera virtual?'];

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    AOS.init();
    const imagenCarrusel = document.getElementsByClassName('claseImagenCarrusel');
    const carrusel = document.getElementById('carousel');
    this.render.addClass(carrusel,'dark');
    for (var i = 0; i < imagenCarrusel.length; i++) {
      this.render.setStyle(imagenCarrusel[i],'height','100vh');
    }
  }

}

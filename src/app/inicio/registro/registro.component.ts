import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {



  constructor(private render: Renderer2, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    // const imagenCarrusel = document.getElementsByClassName('claseImagenCarrusel');
    // const carrusel = document.getElementById('carousel');
    // this.render.addClass(carrusel,'dark');
    // for (var i = 0; i < imagenCarrusel.length; i++) {
    //   this.render.setStyle(imagenCarrusel[i],'height','100vh');
    // }
    var id = this.ruta.snapshot.paramMap.get("id");
    const login = document.getElementById('tab-1');
    const registro = document.getElementById('tab-2');
    if (id=='1') {
      this.render.setAttribute(login,'checked','true');
      this.render.removeAttribute(registro,'checked');
    } else {
      this.render.removeAttribute(login,'checked');
      this.render.setAttribute(registro,'checked','true');
    }
  }






}





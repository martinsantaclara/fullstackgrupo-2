import { Component, OnInit, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
  }

  clickLink(id: string) {
    var navItems = document.getElementsByClassName('nav-link');
    const link = document.getElementById(id);
    for(var i=0; i < navItems.length; i++) {
      this.render.removeClass(navItems[i],'active');
    }
    if (id!=='brand'){
      this.render.addClass(link,'active');
    }
  }

  @HostListener("window:scroll")
    onWindowScroll() {
      const navbarMenu = document.getElementById('menu');
      const imagenFondo = document.getElementById('imagenFondo');
      const ultimoparrafo = document.getElementById('ultimoparrafo');
      if (window.pageYOffset > 0) {
        this.render.addClass(navbarMenu,'scroll');

        const totallHeight = document.body.clientHeight + 50;
        // const heightImagenFondo = ;
        this.render.setStyle(imagenFondo,'height',`${totallHeight}px`);
        // this.render.setStyle(imagenFondo,'height','1800px');

      } else {
        this.render.removeClass(navbarMenu,'scroll');
        console.log('scroll igual a 0');
      }
    // console.log('window.pageYOffset ' + );
    // console.log('document.documentElement.scrollTop ' + document.documentElement.scrollTop);
    // console.log('document.body.scrollTop ' + document.body.scrollTop);
  }


}

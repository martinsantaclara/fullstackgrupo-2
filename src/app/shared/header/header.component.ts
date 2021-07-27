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
    const imagenFondo = document.getElementById('imagenFondo');
    this.render.setStyle(imagenFondo,'height','100vh');

    if (id!=='nosotros') {
      const footer = document.getElementById('footer');
      const topFooter = imagenFondo?.clientHeight! - 50;

      console.log('top footer ' + topFooter);
      this.render.setStyle(footer,'visibility','visible');
       this.render.setStyle(footer,'top',`${topFooter}px`);
      // this.render.setStyle(footer,'bottom','10px');
    } else {
      const footer = document.getElementById('footer');
      this.render.setStyle(footer,'visibility','hidden');
    }

  }

  @HostListener("window:scroll")
    onWindowScroll() {
      const navbarMenu = document.getElementById('menu');
      const imagenFondo = document.getElementById('imagenFondo');
      const footer = document.getElementById('footer');
      if (window.pageYOffset > 0) {
        this.render.addClass(navbarMenu,'scroll');

        const totallHeight = document.body.clientHeight + 50;

        // const heightImagenFondo = ;
        this.render.setStyle(imagenFondo,'height',`${totallHeight}px`);
        this.render.setStyle(footer,'visibility',`visible`);
        this.render.setStyle(footer,'top',`${document.body.clientHeight}px`)
        // this.render.setStyle(footer,'bottom','10px');
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

import { Component, OnInit, Renderer2 } from '@angular/core';

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
}

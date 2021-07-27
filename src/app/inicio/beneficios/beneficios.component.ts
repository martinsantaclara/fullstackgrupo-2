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
  }

}

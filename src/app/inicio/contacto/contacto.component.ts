import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms'
import Aos from 'aos';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

   emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   telefPattern: any = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;

  createFormGroup() {
    return new FormGroup ({
      nombre: new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      telefono: new FormControl('',[Validators.required, Validators.minLength(6), Validators.pattern(this.telefPattern)]),
      consulta: new FormControl('',[Validators.required, Validators.maxLength(280)])
    });
  }

  contactForm: FormGroup;

  list = ['Contáctate con nosotros'];

  constructor(private render: Renderer2) {
    this.contactForm = this.createFormGroup();
   }

  ngOnInit(): void {

    Aos.init();

    // const imagenCarrusel = document.getElementsByClassName('claseImagenCarrusel');
    // const carrusel = document.getElementById('carousel');
    // this.render.addClass(carrusel,'dark');
    // for (var i = 0; i < imagenCarrusel.length; i++) {
    //   this.render.setStyle(imagenCarrusel[i],'height','100vh');
    // }
  }

  saveFormContact() {
    if (this.contactForm.valid) {
        console.log('saved form');
    }
  }

  get nombre() { return this.contactForm.get('nombre'); }
  get email() { return this.contactForm.get('email'); }
  get telefono() { return this.contactForm.get('telefono'); }
  get consulta() { return this.contactForm.get('consulta'); }

}

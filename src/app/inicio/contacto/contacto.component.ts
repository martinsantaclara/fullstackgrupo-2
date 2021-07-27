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

    const elment = document.getElementById('contact-wrap');
    const obj = elment?.getBoundingClientRect();
    const height = obj?.height!;

    console.log('height contact-wrap '+height );

    const elment1 = document.getElementById('page');
    const obj1 = elment1?.getBoundingClientRect();
    const height1 = obj1?.height!;

    console.log('page '+height1 );

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

  agregaError() {
    const contact = document.getElementById('contact-wrap');
    const page = document.getElementById('page');
    const imagenFondo = document.getElementById('imagenFondo');
    const obj = contact?.getBoundingClientRect();
    let heightContact = obj?.height! + 10;

    heightContact = (heightContact > 640 ? heightContact : 640);
    this.render.setStyle(page,'height',`${heightContact}px`);
    const heightImagen = heightContact + 125;
    this.render.setStyle(imagenFondo,'height',`${heightImagen}px`);

    const topFooter = heightImagen - 50;
    const footer = document.getElementById('footer');
    // this.render.setStyle(footer,'bottom','10px');
    this.render.setStyle(footer,'top',`${topFooter}px`);

    return true;
  }

  get nombre() { return this.contactForm.get('nombre'); }
  get email() { return this.contactForm.get('email'); }
  get telefono() { return this.contactForm.get('telefono'); }
  get consulta() { return this.contactForm.get('consulta'); }

}

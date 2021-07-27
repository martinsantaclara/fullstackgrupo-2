import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.css']
})
export class BilleteraComponent implements OnInit {

  list = ['Qué es una billetera virtual?'];

  constructor() { }

  ngOnInit(): void {
  }

}

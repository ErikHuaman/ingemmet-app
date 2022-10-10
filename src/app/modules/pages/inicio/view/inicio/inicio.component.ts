import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {
  carousel = [
    {
      nombre:'Alexis dias',
      usuario:'alexis',
      actividad:'Feliz Cumpleaños',
      dia:"21 Mayo,2000",
      color:"date2"
    },
    {
      nombre:'Mario vargas',
      usuario:'mariov',
      actividad:'bienvenido al equipo',
      dia:"Joined May,2021",
      color:"date"
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {
  products = [1, 2, 3];

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

  servicios: any[] = [
    { title: 'FERMIN ELABORACIÓN DE DOCUMENTOS', icon: '' },
    { title: 'VENTANILLA VIRTUAL MESA DE OARTES INTERNA', icon: '' },
    { title: 'DOCUMENTACIÓN DEL SISTEMA DE GESTIÓN DE CALIDAD', icon: '' },
    { title: 'REGISTRO DE ASISTENCIA', icon: '' },
    { title: 'REQUERIMIENTO DE SOFTWARE', icon: '' },
    { title: 'MESA DE AYUDA', icon: '' },
    { title: 'SISTEMA DE TRAMITE DOCUMENTARIO', icon: '' },
    { title: 'SOLICITUD DE SERVICIOS ARCHIVISTICOS UADA', icon: '' },
    { title: 'FLUJO DE DOCUMENTACIÓN MINERA', icon: '' },
    { title: 'SISTEMA INTEGRADO DE LABORATORIOS SIL', icon: '' },
    { title: 'BIENES ASIGNADOS', icon: '' },
    { title: 'LUCHA CONTRA LA CORRUPCIÓN', icon: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

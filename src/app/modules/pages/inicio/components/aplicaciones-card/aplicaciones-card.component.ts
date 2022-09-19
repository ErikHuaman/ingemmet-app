import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicaciones-card',
  templateUrl: './aplicaciones-card.component.html',
})
export class AplicacionesCardComponent implements OnInit {
  aplicaciones: any[] = [
    { name: 'FERMIN ELABORACIÓN DE DOCUMENTOS', icon: '' },
    { name: 'VENTANILLA VIRTUAL MESA DE OARTES INTERNA', icon: '' },
    { name: 'DOCUMENTACIÓN DEL SISTEMA DE GESTIÓN DE CALIDAD', icon: '' },
    { name: 'REGISTRO DE ASISTENCIA', icon: '' },
    { name: 'REQUERIMIENTO DE SOFTWARE', icon: '' },
    { name: 'MESA DE AYUDA', icon: '' },
    { name: 'SISTEMA DE TRAMITE DOCUMENTARIO', icon: '' },
    { name: 'SOLICITUD DE SERVICIOS ARCHIVISTICOS UADA', icon: '' },
    { name: 'FLUJO DE DOCUMENTACIÓN MINERA', icon: '' },
    { name: 'SISTEMA INTEGRADO DE LABORATORIOS SIL', icon: '' },
    { name: 'BIENES ASIGNADOS', icon: '' },
    { name: 'LUCHA CONTRA LA CORRUPCIÓN', icon: '' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

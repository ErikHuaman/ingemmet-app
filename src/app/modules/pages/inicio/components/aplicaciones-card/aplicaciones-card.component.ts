import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicaciones-card',
  templateUrl: './aplicaciones-card.component.html',
})
export class AplicacionesCardComponent implements OnInit {
  aplicaciones: any[] = [
    { name: 'Fermin elaboración de documentos', icon: 'bi bi-files',route:'' },
    { name: 'Ventanilla virtual mesa de partes interna', icon: 'bi bi-tablet',route:'' },
    { name: 'Documentación del sistema de gestión de calidad', icon: 'bi bi-columns-gap',route:'' },
    { name: 'Registro de asistencia', icon: 'bi bi-device-ssd',route:'' },
    { name: 'Requerimiento de software', icon: 'bi bi-display',route:'' },
    { name: 'Mesa de ayuda', icon: 'bi bi-door-open',route:'' },
    { name: 'Sistema de tramite documentario', icon: 'bi bi-tablet',route:'' },
    { name: 'Más Aplicaciones', icon: 'bi bi-bookmark-plus',route:'/aplicaciones' },

    /*
     { name: 'Mesa de ayuda', icon: 'bi bi-door-open' },
    { name: 'Sistema de tramite documentario', icon: 'bi bi-tablet' },
    { name: 'Solicitud de servicios archivisticos uada', icon: 'bi bi-tablet' },
    { name: 'Flujo de documentación minera', icon: 'bi bi-tablet' },
    { name: 'Sistema integrado de laboratorios sil', icon: 'bi bi-tablet' },
    { name: 'Bienes asignados', icon: 'bi bi-door-closed' },
    { name: 'Lucha contra la corrupción', icon: 'bi bi-tablet' },*/
  ];

  constructor() {}

  ngOnInit(): void {}
}

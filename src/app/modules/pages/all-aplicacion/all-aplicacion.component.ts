import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-aplicacion',
  templateUrl: './all-aplicacion.component.html',
 
})
export class AllAplicacionComponent implements OnInit {
  aplicaciones: any[] = [
    { name: 'Fermin elaboración de documentos', icon: 'bi bi-files',route:'' },
    { name: 'Ventanilla virtual mesa de partes interna', icon: 'bi bi-tablet',route:'' },
    { name: 'Documentación del sistema de gestión de calidad', icon: 'bi bi-columns-gap',route:'' },
    { name: 'Registro de asistencia', icon: 'bi bi-device-ssd',route:'' },
    { name: 'Requerimiento de software', icon: 'bi bi-display',route:'' },
   
    { name: 'Mesa de ayuda', icon: 'bi bi-door-open',route:'' },
    { name: 'Sistema de tramite documentario', icon: 'bi bi-tablet',route:'' },
    { name: 'Solicitud de servicios archivisticos uada', icon: 'bi bi-tablet',route:'' },
    { name: 'Flujo de documentación minera', icon: 'bi bi-tablet',route:'' },
    { name: 'Sistema integrado de laboratorios sil', icon: 'bi bi-tablet',route:'' },
    { name: 'Bienes asignados', icon: 'bi bi-door-closed',route:'' },
    { name: 'Lucha contra la corrupción', icon: 'bi bi-tablet',route:'' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

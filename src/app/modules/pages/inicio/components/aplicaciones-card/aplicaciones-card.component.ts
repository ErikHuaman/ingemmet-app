import { Component, OnInit } from '@angular/core';
import { IntranetService } from 'src/app/services/intranet.service';

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
  listApp:any = [];
  nombreBuscar:string = '';
  aplicacionesAux:any[] = [];
  constructor(private intranetService: IntranetService) {}
  ngOnInit(): void {
    this.mostraAplicacion();
  }

  mostraAplicacion(): void {
    this.intranetService.get("Aplicacion/ingemmet").subscribe(response => {
        if (response.code == 201) {
             console.log(response)
            this.aplicaciones = response.data.aplicaciones;
            this.listApp = this.aplicaciones;
            /*for (var i = 0; i < 8; i++) {
              this.listApp.push(this.aplicaciones[i]);
            } */
            this.listApp.push({idSistema:null,codSistema:'MAS APLICACIONES',descSistema:'Más Aplicaciones',imagen:'bi bi-bookmark-plus',urlSistema:'/aplicaciones'})
            console.log(this.listApp)
        }
    });
  }
}

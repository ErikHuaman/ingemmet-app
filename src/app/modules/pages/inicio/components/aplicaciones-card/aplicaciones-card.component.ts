import { Component, OnInit } from '@angular/core';
import { C } from 'src/app/constante/constants';
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
    this.intranetService.get("Aplicacion/byRol").subscribe(response => {
        if (response.code == 201) {
            this.aplicaciones = response.data.aplicaciones;
            if(this.aplicaciones.length > 8){
              for (var i = 0; i < 8; i++) {
                this.listApp.push(this.aplicaciones[i]);
              } 
            }else{
              this.listApp = this.aplicaciones;
            }
            this.listApp.push({idSistema:null,codSistema:'MAS APLICACIONES',descSistema:'Más Aplicaciones',imagen:'bi bi-bookmark-plus',urlSistema:'/aplicaciones'})
           
            this.listApp.forEach(element => {
               if(element.imagen){
                  element.img =  `data:image/png;base64,${element.imagen}`;
               }else{
                  element.img ="https://cdn-icons-png.flaticon.com/512/4795/4795825.png";
               }
            }); 

        }
    });
  }

  Aplicacionesss(item:any) {
      console.log(item)
      this.intranetService.post("Auth/GetLinkApp?username=Migraintranet01&IdSistemaActual=16&IdSistemaRedirigir=9&IdUsuario=3384&MinutosExpira=1").subscribe(response => {
          console.log(response.data)
          window.open(response.data.appLink, "_blank");
      });
  }
  Aplicaciones(item:any) {
    if(sessionStorage.getItem(C.STORAGE.USERS)){
      let usuario = sessionStorage.getItem(C.STORAGE.USERS);
      let sistema = sessionStorage.getItem(C.STORAGE._ID_SISTEMA);
      let idUsuario = sessionStorage.getItem(C.STORAGE._ID);
      this.intranetService.post("Auth/GetLinkApp?username="+usuario+"&IdSistemaActual="+sistema+"&IdSistemaRedirigir="+item.idSistema+"&IdUsuario="+idUsuario+"&MinutosExpira=2").subscribe(response => {
          if(response.data){
             window.open(response.data.appLink, "_blank");
          }else{

          }
          
      });
    }
      
  }
}

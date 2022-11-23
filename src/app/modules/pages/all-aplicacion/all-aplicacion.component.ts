import { Component, OnInit } from '@angular/core';
import { C } from 'src/app/constante/constants';
import { GlobalMessageService } from 'src/app/services/global-message.service';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-all-aplicacion',
  templateUrl: './all-aplicacion.component.html',
 
})
export class AllAplicacionComponent implements OnInit {
  aplicacioness: any[] = [
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
  aplicaciones: any[] = [];
  aplicacionesAux:any[] = [];
  nombreBuscar:string = '';
  constructor(
    private intranetService: IntranetService,
    public msj: GlobalMessageService,
    
    ) {}
  ngOnInit(): void {
    this.mostraAplicacion();
  }

  mostraAplicacion(): void {
    this.msj.loading(true);
    this.intranetService.get("Aplicacion/ByRol").subscribe(response => {
        if (response.code == 201) {
    
           this.aplicaciones = response.data.aplicaciones;
           this.aplicaciones.forEach(element => {
            if(element.imagen){
               element.img =  `data:image/png;base64,${element.imagen}`;
            }else{
               element.img ="https://cdn-icons-png.flaticon.com/512/4795/4795825.png";
            }
         }); 
           this.aplicacionesAux =  this.aplicaciones;
           this.msj.loading(false);
        }
    });
  }

  buscar(): void{
    this.aplicaciones = this.nombreBuscar == "" ? this.aplicacionesAux : this.aplicacionesAux.filter(x => x.codSistema.toUpperCase().includes(this.nombreBuscar.toUpperCase()));
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

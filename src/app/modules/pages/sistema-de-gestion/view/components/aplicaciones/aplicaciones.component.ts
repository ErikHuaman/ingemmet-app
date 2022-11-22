import { Component, OnInit } from '@angular/core';
import { C } from 'src/app/constante/constants';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
})
export class AplicacionesComponent implements OnInit {
  aplicaciones = [1, 2, 3, 4];

  constructor(private intranetService: IntranetService) {

  }

  ngOnInit(): void {
    this.mostraAplicacion();
  }

  mostraAplicacion(): void {
    this.intranetService.get("Aplicacion/ingemmet").subscribe(response => {
      console.log(response)
        if (response.code == 201) {
           console.log(response)
          
        }
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

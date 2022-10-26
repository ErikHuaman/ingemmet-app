import { Component, OnInit } from '@angular/core';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { GlobalMessageService } from 'src/app/services/global-message.service';
import { IntranetService } from 'src/app/services/intranet.service';

declare var $;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
})
export class NoticiasComponent implements OnInit {
  noticias:any = [];

  constructor(
    private _intranetService:IntranetService,
    public msj: GlobalMessageService,){}

  ngOnInit(): void {
    
      this.mostrarNoticias();
  }

    mostrarNoticias(): void {
        this.msj.loading(true);
        this._intranetService.get(Endpoint.Evento+"/GetNoticias").subscribe(response => {
           console.log(response)
          if(response.code==201){
            this.noticias = response.data;
            this.noticias.forEach(element => {
                element.url= element.url.replaceAll('href="/','href="https://www.gob.pe/');
            });
     
            this.msj.loading(false);
          }
          
        }, error=>{
         this.msj.loading(false);
        });
    }

}

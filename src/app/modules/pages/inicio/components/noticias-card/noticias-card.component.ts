import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { GlobalMessageService } from 'src/app/services/global-message.service';
import { IntranetService } from 'src/app/services/intranet.service';
import { ServiceService } from '../../service.service';

declare var $: any;

@Component({
  selector: 'app-noticias-card',
  templateUrl: './noticias-card.component.html',
})
export class NoticiasCardComponent implements OnInit {
  noticiasList:any = [];
  noticias:any = [];
  loadingNoticias:boolean = true;

  constructor(
    private _intranetService:IntranetService,
    public msj: GlobalMessageService,){}

  ngOnInit(): void {
      this.mostrarNoticias();
  }

  mostrarNoticias(): void {
        this.loadingNoticias=true;
        this._intranetService.get(Endpoint.Evento+"/GetNoticias").subscribe(response => {
           console.log(response)
            if(response.code==201){
                this.noticiasList = response.data;
                this.noticiasList.forEach(element => {
                    element.url= element.url.replaceAll('href="/','href="https://www.gob.pe/');
                });
                for (var i = 0; i < 3; i++) {
                  this.noticias.push(this.noticiasList[i]);
                }
                this.loadingNoticias=false;
            }
          
        }, error=>{
            this.loadingNoticias=false;
        });
  }
}

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
            if(response.code==201){
                this.noticiasList = response.data;
                this.noticiasList.forEach(element => {
                  let thishref = this.stringToHTML(element.url);
                  element.titulos = thishref.children[0].textContent;
                  element.rutaNoticias= 'https://www.gob.pe' +thishref.children[0].getAttribute('href');
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

  stringToHTML = function (str) {
    var dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
  };
}

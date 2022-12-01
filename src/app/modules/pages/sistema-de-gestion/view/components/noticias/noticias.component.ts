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
  p: number = 1;
  total:number = 0;
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  loadingNoticias:boolean = true;
  constructor(
    private _intranetService:IntranetService,
    public msj: GlobalMessageService,){}

  ngOnInit(): void {
    
      this.mostrarNoticias();
  }

    mostrarNoticias(): void {
        this.msj.loading(true);
        this.loadingNoticias=true;
        this._intranetService.get(Endpoint.Evento+"/GetNoticias").subscribe(response => {
          
          if(response.code==201){
            this.noticias = response.data;
            this.total = this.noticias.length;
            this.noticias.forEach(element => {
                 let thishref = this.stringToHTML(element.url);
              
                  element.titulos = thishref.children[0].textContent;
                  element.rutaNoticias= 'https://www.gob.pe' +thishref.children[0].getAttribute('href');
            });
     
            this.msj.loading(false);
            this.loadingNoticias=false;
          
          }
          
        }, error=>{
         this.msj.loading(false);
         this.loadingNoticias=false;
      
        });
    }
    
    stringToHTML = function (str) {
      var dom = document.createElement('div');
      dom.innerHTML = str;
      return dom;
    };
}

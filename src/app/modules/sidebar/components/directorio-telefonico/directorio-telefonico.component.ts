import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-directorio-telefonico',
  templateUrl: './directorio-telefonico.component.html'
})
export class DirectorioTelefonicoComponent implements OnInit {
  listEnlaces:any = [];
  directorio=[];
  constructor(private intranetService: IntranetService, 
    private confirmationService: ConfirmationService, 
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getDirectorios();
    this.getDirectorio();
  }

  getDirectorios(){
    this.intranetService.get(Endpoint.EnlaceInteres).subscribe(response => {
       this.listEnlaces = response.data.enlaces;
    }, error=>{
    });
  }

  getDirectorio(){
      this.intranetService.get(Endpoint.DirectorioTelefonico).subscribe(response => {
         this.directorio = response.data;
      }, error=>{
      });
  }
  

}

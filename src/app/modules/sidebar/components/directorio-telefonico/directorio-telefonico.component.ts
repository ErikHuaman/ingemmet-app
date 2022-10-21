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
  constructor(private intranetService: IntranetService, 
    private confirmationService: ConfirmationService, 
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getDirectorios();
  }

  getDirectorios(){
    this.intranetService.get(Endpoint.EnlaceInteres).subscribe(response => {
       console.log(response);
       this.listEnlaces = response.data.enlaces;
    }, error=>{
      console.log(error)
      
    });
  }

}

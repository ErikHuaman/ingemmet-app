import { DataSource } from '@angular/cdk/collections';
import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService, PrimeNGConfig, TreeNode } from 'primeng/api';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
})
export class DocumentosComponent implements OnInit {
  // activeState: boolean[] = [true, false, false];
  nodes: TreeNode[] = [];
  selectedNode: TreeNode = {};

  constructor(private intranetService: IntranetService, 
    private confirmationService: ConfirmationService, 
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService) {}

  ngOnInit(): void {
    this.getDirectorios();
  }

  getDirectorios(){
    this.intranetService.get(Endpoint.DocumentoDigitales).subscribe(response => {
      this.nodes = response.data.directorios.map(function(x:any) {return {...x}});
      console.log(this.nodes)
    }, error=>{
      console.log(error)
      this.showError("Ocurrio error al cargar datos");
    });
  }

  descargar(ruta){
    this.intranetService.getFile(`${Endpoint.DocumentoDigitalesDescargar}?ruta=${ruta}`).subscribe((event) => {
      if (event.type === HttpEventType.Response) {
        const downloadedFile = new Blob([event.body]);
        const a = document.createElement('a');
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        a.download = ruta;
        a.href = URL.createObjectURL(downloadedFile);
        a.target = '_blank';
        a.click();
        document.body.removeChild(a);
      }

    }, error=>{
      console.log(error)
      this.showError("Ocurrio error al descargar archivo");
    });
  }

  showSuccess(msg = '') {
    msg = msg != '' ? msg : 'Accion realizada con exito!';
    this.messageService.add({severity:'success', summary: 'Exito!', detail: msg});
  }
  
  showError(msgError:string = '') {
    msgError = msgError != '' ? msgError : 'Ocurrio un error al realizar accion!';
    this.messageService.add({severity:'error', summary: 'Error', detail: msgError});
  }
}

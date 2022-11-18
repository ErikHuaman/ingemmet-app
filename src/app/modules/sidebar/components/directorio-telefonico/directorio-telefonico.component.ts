import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-directorio-telefonico',
  templateUrl: './directorio-telefonico.component.html',
})
export class DirectorioTelefonicoComponent implements OnInit {
  listEnlaces: any = [];
  directorio = [];
  directorioTelefonico: any;
  ingemmetDir: any;
  minemDir: any;
  constructor(
    private intranetService: IntranetService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getDirectorios();
    this.getDirectorio();
    this.getDirectorioTelefonico();
  }

  getDirectorios() {
    this.intranetService.get(Endpoint.EnlaceInteres).subscribe(
      (response) => {
        this.listEnlaces = response.data.enlaces;
      },
      (error) => {}
    );
  }

  getDirectorio() {
    this.intranetService.get(Endpoint.DirectorioTelefonico).subscribe(
      (response) => {
        this.directorio = response.data;
      },
      (error) => {}
    );
  }

  getDirectorioTelefonico() {
    this.intranetService.get(Endpoint.DocumentoDigitales).subscribe(
      (response) => {
        this.directorioTelefonico = response.data.directorios
          .map(function (x: any) {
            return { ...x };
          })
          .find((d) => d.data.nombre == 'Directorio Telefonico').children;
        // children.filter(n=>n.label === 'Directorio Telefonico');
        console.log(this.directorioTelefonico);
        this.ingemmetDir = this.directorioTelefonico.find(
          (i) => i.label === 'INGEMMET'
        ).children[0].data;
        this.minemDir = this.directorioTelefonico.find(
          (i) => i.label === 'MINEM'
        ).children[0].data;
      },
      (error) => {}
    );
  }

  descargar(data) {
    this.intranetService
      .getFile(`${Endpoint.DocumentoDigitalesDescargar}?id=${data.id}`)
      .subscribe(
        (event) => {
          if (event.type === HttpEventType.Response) {
            const downloadedFile = new Blob([event.body]);
            const a = document.createElement('a');
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.download = `${data.nombre}.pdf`;
            a.href = URL.createObjectURL(downloadedFile);
            a.target = '_blank';
            a.click();
            document.body.removeChild(a);
          }
        },
        (error) => {
          console.log(error);
          this.showError('Ocurrio error al descargar archivo');
        }
      );
  }

  showSuccess(msg = '') {
    msg = msg != '' ? msg : 'Accion realizada con exito!';
    this.messageService.add({
      severity: 'success',
      summary: 'Exito!',
      detail: msg,
    });
  }

  showError(msgError: string = '') {
    msgError =
      msgError != '' ? msgError : 'Ocurrio un error al realizar accion!';
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: msgError,
    });
  }
}

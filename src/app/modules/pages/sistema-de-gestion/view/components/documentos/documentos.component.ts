import { DataSource } from '@angular/cdk/collections';
import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
  TreeNode,
} from 'primeng/api';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { GlobalMessageService } from 'src/app/services/global-message.service';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
})
export class DocumentosComponent implements OnInit {
  // activeState: boolean[] = [true, false, false];
  nodes: TreeNode[] = [];
  selectedNode: TreeNode = {};
  activeIndex1: number = 0;

  constructor(
    private intranetService: IntranetService,
    private confirmationService: ConfirmationService,
    public msj: GlobalMessageService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getDirectorios();
  }

  getDirectorios() {
    this.msj.loading(true);
    this.intranetService.get(Endpoint.DocumentoDigitales).subscribe(
      (response) => {
        this.nodes = response.data.directorios
          .map(function (x: any) {
            return { ...x };
          })
          .filter((d) => d.data.nombre != 'Directorio Telefonico')[0].children;

        this.nodes.forEach((item) => {
          if (item.children) {
            item.children
              .sort((a, b) => {
                if (a.children && !b.children) return -1;
                else if (!a.children && b.children) return 1;
                else return 0;
              })
              .sort((a, b) => (a.label > b.label ? -1 : 1));
          }
        });
        this.msj.loading(false);
      },
      (error) => {
        console.log(error);
        this.msj.loading(false);
        this.showError('Ocurrio error al cargar datos');
      }
    );
  }

  getIcon(label: string): string {
    let val = label.split('.');
    if (val[val.length - 1] === 'pdf') {
      return 'text-red-700 pi pi-file-pdf';
    } else if (
      val[val.length - 1] === 'xls' ||
      val[val.length - 1] === 'xlsx'
    ) {
      return 'text-blue-700 pi pi-file-excel';
    } else if (
      val[val.length - 1] === 'doc' ||
      val[val.length - 1] === 'docx'
    ) {
      return 'text-blue-700 pi pi-file-word';
    } else if (
      val[val.length - 1] === 'jpg' ||
      val[val.length - 1] === 'png' ||
      val[val.length - 1] === 'bmp' ||
      val[val.length - 1] === 'gif' ||
      val[val.length - 1] === 'tif' ||
      val[val.length - 1] === 'svg'
    ) {
      return 'text-blue-700 far fa-file-image';
    } else if (
      val[val.length - 1] === 'mp4' ||
      val[val.length - 1] === 'avi' ||
      val[val.length - 1] === 'mov'
    ) {
      return 'text-blue-700 pi pi-file-video';
    } else {
      return 'text-blue-700 pi pi-file';
    }
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

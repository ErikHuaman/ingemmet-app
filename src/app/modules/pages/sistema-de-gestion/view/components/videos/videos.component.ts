import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { IntranetService } from 'src/app/services/intranet.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
})
export class VideosComponent implements OnInit {
  @ViewChild('remoteVideo') public remoteVideo: ElementRef;

  @ViewChild('playBtn') public buttonPlay: ElementRef;
  videoActual: any;
  videos: any[] = [];
  listCategorias: any[] = [];

  cat: number = null;
  videoList: any;

  constructor(
    private intranetService: IntranetService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {
    this.getCategorias();
  }

  ngOnInit(): void {}

  getCategorias() {
    this.intranetService.get(Endpoint.Categoria).subscribe(
      (response) => {
        this.listCategorias = response.data.categorias.filter((c) => c.id != 1);
        this.cat = this.listCategorias[0].id;
        this.getVideos();
      },
      (error) => {
        this.showError('Ocurrio error al cargar datos');
      }
    );
  }

  selectCategoria(evt) {
    this.cat = this.listCategorias[evt.index].id;
    this.filterVideos();
  }

  filterVideos() {
    this.videos = this.videoList.filter((v) => v.categoriaid == this.cat);
    this.videos.forEach((element) => {
      element.videos = this.obtenerVideo(element.id);
      element.active = '';
    });
    console.log(this.videos);
    this.videoActual = this.videos[0];
    if (this.videoActual) {
      this.videos[0].active = 'active';
    }
  }

  getVideos() {
    this.intranetService.get(Endpoint.DocumentoVideo).subscribe(
      (response) => {
        this.videoList = response.data.videos;
        this.filterVideos();
      },
      (error) => {
        console.log(error);
        this.showError('Ocurrio error al cargar datos');
      }
    );
  }

  obtenerVideo(id: number) {
    return `${environment.urlApi}/DocumentoVideo/play?id=${id}`;
  }

  verVideo(video) {
    console.log('video', video);
    this.videos.forEach((element) => {
      if (element.id == video.id) {
        element.active = 'active';
      } else {
        element.active = '';
      }
    });

    this.videoActual = video;

    //this.remoteVideo.nativeElement.setAttribute('controls', 'controls');
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

  playVideo() {
    var player = document.getElementById('player') as HTMLVideoElement;
    player.play();
    player.setAttribute('controls', 'controls');

    var playBtn = document.getElementById('playBtn') as HTMLElement;

    playBtn.setAttribute('class', 'hidden');
  }
}

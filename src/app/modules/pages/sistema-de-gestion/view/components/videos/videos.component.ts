import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { IntranetService } from 'src/app/services/intranet.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
})
export class VideosComponent implements OnInit {
  
  @ViewChild ('remoteVideo') public remoteVideo: ElementRef;

  @ViewChild ('playBtn') public buttonPlay:ElementRef;
  videoActual:string = '';
  videos:any[] = [];
  constructor(private intranetService: IntranetService, 
    private confirmationService: ConfirmationService, 
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService) {
      this.getVideos();
    }

  ngOnInit(): void {}

  getVideos(){
    this.intranetService.get(Endpoint.DocumentoVideo).subscribe(response => {
      this.videos = response.data.directorios;
      this.videos.forEach(element => {
         element.videos = this.obtenerVideo(element.data.ruta);
         element.active = '';
      });
      console.log(this.videos)
      this.videoActual = this.videos[0].videos;
      this.videos[0].active = 'active'
    }, error=>{
      console.log(error)
      this.showError("Ocurrio error al cargar datos");
    });
  }

  obtenerVideo(ruta){
    return `${environment.urlApi}/DocumentoVideo/play?ruta=${ruta}`;
  }

  verVideo(ruta) {
        this.videos.forEach(element => {
            if(element.label == ruta.label) {element.active = "active";
            }else{ element.active = '';}
        });
  
      this.videoActual =  this.obtenerVideo(ruta.data.ruta);;

      //this.remoteVideo.nativeElement.setAttribute('controls', 'controls');
   
  }

  showSuccess(msg = '') {
    msg = msg != '' ? msg : 'Accion realizada con exito!';
    this.messageService.add({severity:'success', summary: 'Exito!', detail: msg});
  }
  
  showError(msgError:string = '') {
    msgError = msgError != '' ? msgError : 'Ocurrio un error al realizar accion!';
    this.messageService.add({severity:'error', summary: 'Error', detail: msgError});
  }

  playVideo() {
      var player = document.getElementById('player') as HTMLVideoElement;
      player.play();
      player.setAttribute('controls', 'controls');
  
      var playBtn = document.getElementById('playBtn') as HTMLElement;
  
      playBtn.setAttribute('class', 'hidden');
  }
}

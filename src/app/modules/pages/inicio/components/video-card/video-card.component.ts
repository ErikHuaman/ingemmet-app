import { Component, OnInit } from '@angular/core';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { IntranetService } from 'src/app/services/intranet.service';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
})
export class VideoCardComponent implements OnInit {
  videoHome: any;
  // player = document.getElementById('player') as HTMLVideoElement;

  constructor(private _intranetService: IntranetService) {}

  ngOnInit(): void {
    this._intranetService.get(Endpoint.Video).subscribe((response) => {
      this.videoHome = response.data.videos.find((v) => v.categoriaid == 1);
      if (this.videoHome) {
        this.videoHome.video = this.obtenerVideo(this.videoHome.id);
        this.playVideo();
      }
   
    });
  }

  playVideo() {
    var player = document.getElementById('player') as HTMLVideoElement;
    player.play();
    player.setAttribute('controls', 'controls');

    var playBtn = document.getElementById('playBtn') as HTMLElement;

    playBtn.setAttribute('class', 'hidden');
  }

  pauseVideo() {
    var player = document.getElementById('player') as HTMLVideoElement;
    player.pause();
  }

  obtenerVideo(id: number) {
    return `${environment.urlApi}/DocumentoVideo/play?id=${id}`;
  }
}

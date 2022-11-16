import { Component, OnInit } from '@angular/core';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { IntranetService } from 'src/app/services/intranet.service';

declare var $: any;

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
})
export class VideoCardComponent implements OnInit {
  // player = document.getElementById('player') as HTMLVideoElement;

  constructor( private _intranetService:IntranetService,) {


  }

  ngOnInit(): void {
    
      this._intranetService.get(Endpoint.Video).subscribe(response => {
        console.log(response)
    })

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
}

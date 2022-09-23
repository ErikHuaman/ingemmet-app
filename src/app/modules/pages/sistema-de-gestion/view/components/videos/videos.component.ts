import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
})
export class VideosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  getAVideos(): void{
    

  }

  playVideo() {
    var player = document.getElementById('player') as HTMLVideoElement;
    player.play();
    player.setAttribute('controls', 'controls');

    var playBtn = document.getElementById('playBtn') as HTMLElement;

    playBtn.setAttribute('class', 'hidden');
  }
}

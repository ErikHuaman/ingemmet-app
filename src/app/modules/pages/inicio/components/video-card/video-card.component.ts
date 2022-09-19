import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
})
export class VideoCardComponent implements OnInit {
  // player = document.getElementById('player') as HTMLVideoElement;

  constructor() {}

  ngOnInit(): void {}

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

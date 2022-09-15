import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
})
export class RedesSocialesComponent implements OnInit {
  redeSociales = [
    {
      red: 'facebook',
      url: 'https://img.icons8.com/color/150/000000/facebook-circled--v1.png',
      users: [1, 2, 3, 4, 5],
    },
    {
      red: 'twiter',
      url: 'https://img.icons8.com/color/150/000000/twitter-circled--v1.png',
      users: [1, 2, 3, 4, 5],
    },
    {
      red: 'instagram',
      url: 'https://img.icons8.com/color/150/000000/instagram-new--v1.png',
      users: [1, 2, 3, 4, 5],
    },
    {
      red: 'youtube',
      url: 'https://img.icons8.com/fluency/145/000000/youtube-play.png',
      users: [1, 2, 3, 4, 5],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import axios from 'axios';

declare var $: any;

@Component({
  selector: 'app-noticias-card',
  templateUrl: './noticias-card.component.html',
})
export class NoticiasCardComponent implements OnInit {
  noticias = [
    {
      hora: '7:00',
      texto:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, vel tempora impedit eaque ratione doloribus.',
    },
    {
      hora: '7:00',
      texto:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, vel tempora impedit eaque ratione doloribus.',
    },
    {
      hora: '7:00',
      texto:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, vel tempora impedit eaque ratione doloribus.',
    },
    {
      hora: '7:00',
      texto:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, vel tempora impedit eaque ratione doloribus.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    const api =
      'https://www.gob.pe/busquedas.json?contenido%5B%5D=noticias&institucion%5B%5D=ingemmet&sort_by=recent';

    $.get(api, function (data: any) {
      console.log(data);
    });

    $.ajax({
      type: 'GET',
      url: 'http://www.flalottery.com/exptkt/ff.html',
    }).done(function (data) {
      console.log(data);
    });
  }
}

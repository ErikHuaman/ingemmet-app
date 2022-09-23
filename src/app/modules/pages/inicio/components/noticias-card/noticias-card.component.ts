import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ServiceService } from '../../service.service';

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

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    // $.getJSON(
    //   'https://www.gob.pe/busquedas.json?contenido%5B%5D=noticias&institucion%5B%5D=ingemmet&sort_by=recent',
    //   function (data) {
    //     console.log('data -> ', data);
    //   }
    // );

    this.service.getNoticias().subscribe((res) => {
      console.log('res->', res);
    });

    // async function load() {
    // const url =
    //   'https://www.gob.pe/busquedas.json?contenido%5B%5D=noticias&institucion%5B%5D=ingemmet&sort_by=recent';
    //   let obj = await (await fetch(url)).json();
    //   console.log(obj);
    // }
    // load();

    // axios.get(url).then((data) => {
    //   console.log(data);
    // });
  }
}

import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
})
export class NoticiasComponent implements OnInit {
  noticias = [
    {
      titular: 'Noticia 1',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit tempore aut consequuntur et temporibus quod illum, neque sunt facere!',
    },
    {
      titular: 'Noticia 1',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit tempore aut consequuntur et temporibus quod illum, neque sunt facere!',
    },
    {
      titular: 'Noticia 1',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit tempore aut consequuntur et temporibus quod illum, neque sunt facere!',
    },
    {
      titular: 'Noticia 1',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit tempore aut consequuntur et temporibus quod illum, neque sunt facere!',
    },
    {
      titular: 'Noticia 1',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit tempore aut consequuntur et temporibus quod illum, neque sunt facere!',
    },
    {
      titular: 'Noticia 1',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit tempore aut consequuntur et temporibus quod illum, neque sunt facere!',
    },
    {
      titular: 'Noticia 1',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit tempore aut consequuntur et temporibus quod illum, neque sunt facere!',
    },
    {
      titular: 'Noticia 1',
      preview:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit tempore aut consequuntur et temporibus quod illum, neque sunt facere!',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    $.get('http://www.flalottery.com/exptkt/ff.html', function (data) {
      console.log(data);
    });

    $.ajax({
      type: 'GET',
      url: 'https://www.gob.pe/busquedas.json?contenido%5B%5D=noticias&institucion%5B%5D=ingemmet&sort_by=recent',
    }).done(function (data) {
      console.log(data);
    });
  }
}

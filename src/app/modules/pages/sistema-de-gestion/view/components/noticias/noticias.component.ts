import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {}
}

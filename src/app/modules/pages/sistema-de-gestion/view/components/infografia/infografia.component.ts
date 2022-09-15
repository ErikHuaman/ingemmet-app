import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infografia',
  templateUrl: './infografia.component.html',
})
export class InfografiaComponent implements OnInit {
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  documentos: any[] = [
    {
      page: 1,
      image: '',
    },
    {
      page: 2,
      image: '',
    },
    {
      page: 3,
      image: '',
    },
    {
      page: 4,
      image: '',
    },
    {
      page: 5,
      image: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

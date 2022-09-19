import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cumpleanios',
  templateUrl: './cumpleanios.component.html',
})
export class CumpleaniosComponent implements OnInit {
  elementos = [
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

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
})
export class AplicacionesComponent implements OnInit {
  aplicaciones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
})
export class AplicacionesComponent implements OnInit {
  aplicaciones = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}

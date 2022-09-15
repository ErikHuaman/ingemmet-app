import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
})
export class DocumentosComponent implements OnInit {
  activeState: boolean[] = [true, false, false];
  constructor() {}

  ngOnInit(): void {}

  filter() {}
}

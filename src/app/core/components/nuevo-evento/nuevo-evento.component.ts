import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { createEventId } from 'src/app/core/utils';

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
})
export class NuevoEventoComponent implements OnInit {
  title = null;

  allDay = false;

  selectInfo: any;

  start!: Date;
  end!: Date;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.selectInfo = this.config.data.selectInfo;

    this.start = this.config.data.selectInfo.start as Date;
    this.start.setHours(8);
    this.end = this.start;
  }

  save() {
    console.log('aquí');
    const response = {
      id: createEventId(),
      title: this.title,
      start: this.allDay ? this.selectInfo.startStr : this.start.toISOString(),
      end: this.allDay ? this.selectInfo.endStr : this.end.toISOString(),
      allDay: this.allDay,
    };
    this.ref.close(response);
  }

  cancel() {
    console.log('cerrar');
    this.ref.close(null);
  }

  handleClick() {
    console.log('hola');
    //execute action
  }
}

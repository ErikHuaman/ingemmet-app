import { Component, OnInit } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/angular';
import { createEventId, INITIAL_EVENTS } from 'src/app/core/utils';
import { DialogService } from 'primeng/dynamicdialog';
import { NuevoEventoComponent } from 'src/app/core/components/nuevo-evento/nuevo-evento.component';
import { IntranetService } from 'src/app/services/intranet.service';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import esLocale from '@fullcalendar/core/locales/es';
import { GlobalMessageService } from 'src/app/services/global-message.service';
@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
})
export class AdministracionComponent implements OnInit {
  calendarVisible = true;
  Events:any = [];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    locale: esLocale,
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),

  };
  currentEvents: EventApi[] = [];

  constructor(
    public msj: GlobalMessageService,
    public dialogService: DialogService,
    private intranetService: IntranetService, 
    ) {}

  ngOnInit(): void {

    this.getEventos();
   
  }
  
  onDateClick(res: any) {
    console.log(res)
    alert('Tenias un evento el día  : ' + res.dateStr);
  }
   
  getEventos(){
    let eventos = [];
    this.msj.loading(true);
    this.intranetService.get(Endpoint.Evento).subscribe(response => {
      response.data.eventos.forEach(element => {
         eventos.push({
          title: element.nombre,
          start: new Date(element.fecha),
          end: new Date(element.fecha),
          description: element.nombre
        })
      });

      setTimeout(() => {
        this.calendarOptions = {
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          },
          initialView: 'dayGridMonth',
          locale: esLocale,
          dateClick: this.onDateClick.bind(this),
          events: eventos,
        };
        this.msj.loading(false);
      }, 2500);

    }, error=>{
      console.log(error)
      
    });
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    // const title = prompt('Please enter a new title for your event');

    const ref = this.dialogService.open(NuevoEventoComponent, {
      header: 'Nuevo Evento',
      width: '400px',
      // modal: false,
      closeOnEscape: true,
      dismissableMask: true,
      data: {
        selectInfo: selectInfo,
      },
    });

    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    ref.onClose.subscribe((res: any) => {
      if (res) {
        calendarApi.addEvent(res);
        // this.messageService.add({
        //   severity: 'info',
        //   summary: 'Car Selected',
        //   detail: 'Vin:' + car.vin,
        // });
      }
    });

    // const calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }
}

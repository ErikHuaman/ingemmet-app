import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//primeng componentes
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ChipModule } from 'primeng/chip';
import { InputNumberModule } from 'primeng/inputnumber';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { TabMenuModule}  from 'primeng/tabmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TreeModule } from 'primeng/tree';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin,
]);

const MODULES = [
  CommonModule,
  HttpClientModule,
  BrowserModule,
  BrowserAnimationsModule,
  CdkScrollableModule,
  FormsModule,
  ReactiveFormsModule,
  FullCalendarModule,
  ToastModule,
  AvatarModule,
  AvatarGroupModule,
  ButtonModule,
  InputTextModule,
  ButtonModule,
  DialogModule,
  TableModule,
  DialogModule,
  TableModule,
  ProgressBarModule,
  DynamicDialogModule,
  ConfirmDialogModule,
  FileUploadModule,
  CheckboxModule,
  MenuModule,
  ChipModule,
  CalendarModule,
  InputNumberModule,
  BadgeModule,
  DividerModule,
  ListboxModule,
  CardModule,
  RadioButtonModule,
  TabViewModule,
  InputSwitchModule,
  CarouselModule,
  AccordionModule,
  TabMenuModule,
  NgxTwitterTimelineModule,
  ProgressSpinnerModule,
  TreeModule
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
  providers: [DialogService, MessageService, ConfirmationService],
})
export class CommonImportModule {}

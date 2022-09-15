import { NoticiasComponent } from './view/components/noticias/noticias.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SistemaDeGestionComponent } from './view/sistema-de-gestion/sistema-de-gestion.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TabViewModule } from 'primeng/tabview';
import { OrganigramaComponent } from './view/components/organigrama/organigrama.component';
import { DocumentosComponent } from './view/components/documentos/documentos.component';
import { AplicacionesComponent } from './view/components/aplicaciones/aplicaciones.component';
import { InfografiaComponent } from './view/components/infografia/infografia.component';
import { VideosComponent } from './view/components/videos/videos.component';
import { RedesSocialesComponent } from './view/components/redes-sociales/redes-sociales.component';
import { AgendaComponent } from './view/components/agenda/agenda.component';

@NgModule({
  declarations: [
    SistemaDeGestionComponent,
    OrganigramaComponent,
    DocumentosComponent,
    AplicacionesComponent,
    InfografiaComponent,
    RedesSocialesComponent,
    VideosComponent,
    AgendaComponent,
    NoticiasComponent,
  ],
  imports: [CommonModule, RouterModule, DragDropModule, TabViewModule],
  exports: [
    OrganigramaComponent,
    DocumentosComponent,
    AplicacionesComponent,
    InfografiaComponent,
    RedesSocialesComponent,
    VideosComponent,
    AgendaComponent,
    NoticiasComponent,
  ],
})
export class SistemaDeGestionModule {}

import { NoticiasComponent } from './view/components/noticias/noticias.component';
import { NgModule } from '@angular/core';
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
import { CommonImportModule } from 'src/app/core/common-import.module';

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
  imports: [RouterModule, DragDropModule, CommonImportModule],
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

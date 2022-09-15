import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemadegestionComponent } from './view/sistema-de-gestion/sistema-de-gestion.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TabViewModule } from 'primeng/tabview';
import { OrganigramaComponent } from './view/components/organigrama/organigrama.component';
import { DocumentosComponent } from './view/components/documentos/documentos.component';
import { AplicacionesComponent } from './view/components/aplicaciones/aplicaciones.component';
import { DocumentosSgcComponent } from './view/components/documentos-sgc/documentos-sgc.component';
import { LuchaContraLaCorrupcionComponent } from './view/components/lucha-contra-la-corrupcion/lucha-contra-la-corrupcion.component';
import { VideosComponent } from './view/components/videos/videos.component';

@NgModule({
  declarations: [
    SistemadegestionComponent,
    OrganigramaComponent,
    DocumentosComponent,
    AplicacionesComponent,
    DocumentosSgcComponent,
    LuchaContraLaCorrupcionComponent,
    VideosComponent,
  ],
  imports: [CommonModule, DragDropModule, TabViewModule],
  exports: [
    OrganigramaComponent,
    DocumentosComponent,
    AplicacionesComponent,
    DocumentosSgcComponent,
    LuchaContraLaCorrupcionComponent,
    VideosComponent,
  ],
})
export class SistemaDeGestionModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemadegestionComponent } from './view/sistemadegestion/sistemadegestion.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [SistemadegestionComponent],
  imports: [CommonModule, DragDropModule, TabViewModule],
})
export class SistemaDeGestionModule {}

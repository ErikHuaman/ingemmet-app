import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sistema-de-gestion',
  templateUrl: './sistema-de-gestion.component.html',
})
export class SistemaDeGestionComponent {
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  rutasComp = [
    {
      ruta: 'organigrama',
      name: 'Organigrama',
    },
    {
      ruta: 'videos',
      name: 'Videos',
    },
    {
      ruta: 'aplicaciones',
      name: 'Aplicaciones',
    },
    {
      ruta: 'documentos',
      name: 'Documentos',
    },
    {
      ruta: 'infografia',
      name: 'Infografía',
    },
    {
      ruta: 'agenda',
      name: 'Agenda',
    },
    {
      ruta: 'redes-sociales',
      name: 'Redes Sociales',
    },
    {
      ruta: 'noticias',
      name: 'Noticias',
    },
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}

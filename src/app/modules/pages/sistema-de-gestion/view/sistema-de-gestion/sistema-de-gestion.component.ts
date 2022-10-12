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
      icon:"bi bi-bricks",
      ruta: 'organigrama',
      name: 'ORGANIGRAMA',
    },
    {
      icon:"bi bi-files",
      ruta: 'documentos',
      name: 'DOCUMENTOS',
    },
    {
      icon:"bi bi-box-fill",
      ruta: 'aplicaciones',
      name: 'APLICACIONES',
    },

    {
      icon:"bi bi-clipboard-minus",
      ruta: 'infografia',
      name: 'INFOGRAFÍA',
    },
    {
      icon:"bi bi-camera-video",
      ruta: 'videos',
      name: 'VIDEOS',
    },
    { 
      icon:"bi bi-chat-right-text",
      ruta: 'noticias',
      name: 'NOTICIAS',
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

import { Component, OnInit, Pipe, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  user = {
    name: 'Fulanito Menganito Perez Perez',
  };

  menuOptions = [
    {
      name: 'Inicio',
      route: 'inicio',
      // svg: `<svg class="w-4 h-4" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      //         <path
      //           d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
      //         </path>
      //       </svg>`,
    },
    {
      name: 'Institucional',
      route: 'institucional',
    },
    {
      name: 'Minería',
      route: 'mineria',
    },
    {
      name: 'Geología',
      route: 'geologia',
    },
    {
      name: 'Administración',
      route: 'administracion',
    },
    {
      name: 'Sistema de Gestión',
      route: 'sistema-de-gestion',
    },
    {
      name: 'Tecnología',
      route: 'tecnologia',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  svg(html: any) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

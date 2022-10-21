import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Pipe, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IntranetService } from 'src/app/services/intranet.service';
declare var $;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  user = {
    name: 'Fulanito Men...',
  };

  menuOptions = [
    {
      name: 'Inicio',
      route: 'inicio',
      icono:'bi bi-grid'
    },
    {
      name: 'Sistema de Gestión',
      route: 'sistema-de-gestion',
      icono:'bi bi-easel'
    },
    {
      name: 'Eventos',
      route: 'administracion',
      icono:'bi bi-file-person'
    }
   /*  {
      name: 'Institucional',
      route: 'institucional',
      icono:'bi bi-menu-button-wide'
    },
   {
      name: 'Minería',
      route: 'mineria',
      icono:'bi bi-minecart-loaded'
    },
    {
      name: 'Geología',
      route: 'geologia',
      icono:'bi bi-geo'
    },
    {
      name: 'Administración',
      route: 'administracion',
      icono:'bi bi-file-person'
    },
    {
      name: 'Sistema de Gestión',
      route: 'sistema-de-gestion',
      icono:'bi bi-easel'
    },
    {
      name: 'Tecnología',
      route: 'tecnologia',
      icono:'bi bi-body-text'
    },*/

    
  ];
  menus:any = [];
  constructor(private sanitizer: DomSanitizer,@Inject(DOCUMENT) private document: Document,private intranetService: IntranetService) {}

  ngOnInit(): void {
    this.getMenus();
 /*
    var settings = {
      "url": "https://www.gob.pe/busquedas.json?contenido%5B%5D=noticias&institucion%5B%5D=ingemmet&sort_by=recent",
      "method": "GET",
      "timeout": 0,
      "headers": {
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE",
        "Access-Control-Allow-Origin": "*"
      },
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });*/
  }

  svg(html: any) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  sidebarToggle(){
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }

  getMenus(){
      this.intranetService.get("menu").subscribe(response => {
        console.log(response)
          if (response.code == 201) {
             console.log(response)
             this.menus = response.data.menus;
          }
      });
  }

  
}

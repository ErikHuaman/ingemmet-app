import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Pipe, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { C } from 'src/app/constante/constants';
import { GlobalMessageService } from 'src/app/services/global-message.service';
import { IntranetService } from 'src/app/services/intranet.service';
declare var $;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  user = {
    name: '',
    correo:''
  };

  menuOptions = [
    {
      name: 'Inicio',
      route: 'inicio',
      icono:'bi bi-grid',
      submenus:[]
    },
    {
      name: 'Sistema de Gestión',
      route: 'sistema-de-gestion',
      icono:'bi bi-easel',
      submenus:[
        {
          icon:"bi bi-camera-video",
          ruta: 'sistema-de-gestion/videos',
          name: 'Videos',
          href:false
        },
        {
          icon:"bi bi-box-fill",
          ruta: 'sistema-de-gestion/aplicaciones',
          name: 'Aplicaciones',
          href:false
        },
        {
          icon:"bi bi-files",
          ruta: 'sistema-de-gestion/documentos',
          name: 'Documentos',
          href:false
        },
      
    
        {
          icon:"bi bi-clipboard-minus",
          ruta: 'sistema-de-gestion/infografia',
          name: 'Biblioteca',
          href:true
        },
       
        { 
          icon:"bi bi-chat-right-text",
          ruta: 'sistema-de-gestion/noticias',
          name: 'Noticias',
          href:false
        }
      ]
    },
  {
      name: 'Eventos',
      route: 'administracion',
      icono:'bi bi-file-person',
      submenus:[]
      
    }
   /*    {
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
  constructor(private sanitizer: DomSanitizer,
    private _router: Router,
    public msj: GlobalMessageService,
    @Inject(DOCUMENT) private document: Document,private intranetService: IntranetService) {}

  ngOnInit(): void {
     this.getMenus();
      if(sessionStorage.getItem(C.STORAGE.USERS)){
             this.user.name = sessionStorage.getItem(C.STORAGE.USERS);
             this.user.correo = sessionStorage.getItem(C.STORAGE.CORREO);
      }
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
          if (response.code == 201) {
             this.menus = response.data.menus;
             console.log(this.menus)
          }
      });
  }

  cerrarSession(){
    sessionStorage.clear();
    setTimeout(() => {
      this._router.navigate(['/login']);
    },1000)
  }

  
}

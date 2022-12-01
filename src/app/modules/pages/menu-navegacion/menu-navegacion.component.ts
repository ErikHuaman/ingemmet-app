import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
})
export class MenuNavegacionComponent implements OnInit {
  subObjectMenus:any = {};
  listaSubHijos:any = [];
  activeItem2: MenuItem =  {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private intranetService: IntranetService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getsubMenus(params.id);
    });
  }

  getsubMenus(id){
    this.intranetService.get("Submenu/"+id).subscribe(response => {
        if (response.code == 201) {
           this.subObjectMenus = response.data;
           this.mostrarSubMenuHijos(this.subObjectMenus.id)
        }
    });
  }

  mostrarSubMenuHijos(id){
    this.intranetService.get("Submenu/"+id+"/submenuHijos").subscribe(response => {
      if (response.code == 201) {
         this.listaSubHijos = response.data;
      }
    });
  }

}

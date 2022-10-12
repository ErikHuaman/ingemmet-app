import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-institucional',
  templateUrl: './institucional.component.html',
  // styleUrls: ['./institucional.component.scss'],
})
export class InstitucionalComponent implements OnInit {


  items: MenuItem[] = [];
  submenu: any[] = [];
  cargando: boolean = false;

  scrollableItems: MenuItem[] = [];

  activeItem: MenuItem =  {};

  activeItem2: MenuItem =  {};
  
  constructor(private intranetService: IntranetService) {
    this.getMenus()
   }

  ngOnInit() {}

  getMenus(){
    this.cargando = true;
    this.intranetService.get("menu/GetMenuMostrarTest").subscribe(response => {
      console.log(response);
      this.items = response.data.map((x) =>{
        return { 
          id: x.idSistemaModulo, 
          label: x.descModulo, 
          command: (event) => {
            console.log(x.urlModulo);
            if (x.urlModulo)
            {
              window.open(x.urlModulo, "_blank");
            }
            else
            {
              this.activeMenu(x.idSistemaModulo);
            }
          }
        }
      });
      
      this.scrollableItems =this.items;
      this.activeItem = this.items[0];
      this.activeItem2 = this.scrollableItems[0];
      this.cargando = false;
      
      if (this.items.length > 0)
        this.activeMenu(this.items[0].id);

    }, error =>{
      this.cargando = false;
      console.log(error)
      // this.showError();
    });

  }

  activeMenu(id) {
    this.cargando = true;
    this.intranetService.get(`menu/GetMenuMostrarTestById/${id}`).subscribe(response => {
      console.log(response.data);
      this.submenu = response.data;
      this.cargando = false;
    }, error =>{
      this.cargando = false;
      console.log(error)
      // this.showError();
    });
  }
}

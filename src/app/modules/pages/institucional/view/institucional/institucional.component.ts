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

  scrollableItems: MenuItem[] = [];

  activeItem: MenuItem =  {};

  activeItem2: MenuItem =  {};
  
  constructor(private intranetService: IntranetService) {
    this.getMenus()
   }

  ngOnInit() {}

  getMenus(){
    this.intranetService.get("menu/GetMenuMostrarTest").subscribe(response => {
      this.items = response.data.map((x) =>{
        return { 
          id: x.id, 
          label: x.nombre, 
          command: (event) => {
            this.activeMenu(x.id);
          }
        }
      });
      
      this.scrollableItems =this.items;
      this.activeItem = this.items[0];

      this.activeItem2 = this.scrollableItems[0];
    }, error =>{
      console.log(error)
      // this.showError();
    });

  }

  activeMenu(id) {
    console.log(id)
    this.intranetService.get(`menu/GetMenuMostrarTestById/${id}`).subscribe(response => {
      console.log(response.data)
      this.submenu = response.data;
    }, error =>{
      console.log(error)
      // this.showError();
    });
  }
}

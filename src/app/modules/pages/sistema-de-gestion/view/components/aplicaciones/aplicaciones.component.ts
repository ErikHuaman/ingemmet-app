import { Component, OnInit } from '@angular/core';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
})
export class AplicacionesComponent implements OnInit {
  aplicaciones = [1, 2, 3, 4];

  constructor(private intranetService: IntranetService) {

  }

  ngOnInit(): void {
    this.mostraAplicacion();
  }

  mostraAplicacion(): void {
    this.intranetService.get("Aplicacion/ingemmet").subscribe(response => {
      console.log(response)
        if (response.code == 201) {
           console.log(response)
          
        }
    });
  }
}

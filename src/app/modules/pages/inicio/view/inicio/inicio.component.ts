import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent implements OnInit {
  listCumpleanio = [];
  listTrabajoArray = [];
  loadingNoticias: boolean = true;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  display: boolean = false;
  popup: any = [];
  constructor(private intranetService: IntranetService) {}

  ngOnInit(): void {
    this.getCumpleano();
    this.getPopups();
  }

  getCumpleano() {
    this.loadingNoticias = true;
    this.intranetService.get(Endpoint.Felicitaciones).subscribe(
      (response) => {
        this.listCumpleanio = response.data.cumpleanios;
        this.listTrabajoArray = response.data.nuevosTrabajadores;
        this.loadingNoticias = false;
        this.display = true;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPopups() {
    this.loadingNoticias = true;
    this.intranetService.get(Endpoint.Popup).subscribe(
      (response) => {
        console.log(response.data.popups);
        var today = Date.parse(new Date().toString()) / 1000;
        response.data.popups.forEach((element) => {
          var tt_inicio = Date.parse(element.fechacaducidad) / 1000;

          if (today < tt_inicio) {
            this.popup.push(element);
          }
        });
        this.loadingNoticias = false;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

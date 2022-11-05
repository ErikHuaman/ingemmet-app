import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Endpoint } from 'src/app/core/utils/endpointEnum';
import { GlobalMessageService } from 'src/app/services/global-message.service';
import { IntranetService } from 'src/app/services/intranet.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {
  carousel:any;

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
  loadingNoticias:boolean = true;
  constructor(
    private intranetService: IntranetService, 
    private confirmationService: ConfirmationService, 
    private primengConfig: PrimeNGConfig,
    public msj: GlobalMessageService,
    private messageService: MessageService) {

  }
  
  ngOnInit(): void {
    this.mostrarSlider();
  }

  mostrarSlider(){
      this.msj.loading(true);
      this.carousel = [];
      this.loadingNoticias=true;
      this.intranetService.get(Endpoint.Banner).subscribe(response => {
     
        if(response.code==201){
            response.data.banners.forEach(element => {
                this.carousel.push(element);
            });
            this.msj.loading(false);
            this.loadingNoticias=false;
        }
        
      }, error=>{
        this.msj.loading(false);
      });
  }
}

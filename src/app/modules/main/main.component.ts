import { Component, Injector, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GlobalMessageService } from 'src/app/services/global-message.service';

@Component({
  selector: 'app-main',
  template: `
     <app-sidebar></app-sidebar>

     <main id="main" class="main">

       <app-ingemmet-loading [loading]="this.loading" ></app-ingemmet-loading>

       <router-outlet></router-outlet>

       <footer id="footer" class="footer">
        <div class="footer_personalizado">
          <div class="container">
              <div class="row p-0 m-0">
                 <div class="col-lg-4">
                   <div class="copyright">
                     <strong style="font-size:3em"><i class="bi bi-megaphone"></i></strong><br>
                     <strong>Buzón de Sugerencias </strong>
                   </div>
                 </div>  
                 <div class="col-lg-4">
                   <div class="copyright">
                      <strong class="text-center">REDES SOCIALES</strong>
                      <div class="flex justify-center gap-4">
                        <a href="https://www.facebook.com/INGEMMET " target="_blank"><img
                            src="https://img.icons8.com/color/32/000000/facebook-circled--v1.png" alt="facebook" /></a>
                        <a href="https://www.instagram.com/ingemmet.peru/" target="_blank"><img
                            src="https://img.icons8.com/color/32/000000/instagram-new--v1.png" alt="instagram" /></a>
                        <a href="https://twitter.com/ingemmetperu" target="_blank"><img
                            src="https://img.icons8.com/color/32/000000/twitter-circled--v1.png" alt="twitter" /></a>
                        <a href="https://youtube.com/user/IngemmetTV" target="_blank"><img
                            src="https://img.icons8.com/fluency/32/000000/youtube-play.png" alt="youtube" /></a>
                        <a href="https://www.linkedin.com/company/ingemmetperu/" target="_blank"><img
                            src="https://img.icons8.com/color/32/000000/linkedin-circled--v1.png" alt="linkedin" /></a>
                      </div>
                   </div>
                 </div>  
                 <div class="col-lg-4">
                    <div class="copyright"> © Copyright <strong>
                      <span>Instituto Geológico Minero y Metalurgico</span>
                    </strong> Todos los derechos de reserva
                    </div>
              
                 </div>  
              </div>
            </div>
          </div>
      </footer>
     </main>

     
     
  `,
  styles: [``],
})
export class MainComponent implements OnInit {
  loading: boolean = false;
  private _unsubscribeAll: Subject<any> = new Subject();
  private serviceMessages: GlobalMessageService;
  constructor(private injector: Injector) {
    this.serviceMessages =
    this.injector.get<GlobalMessageService>(GlobalMessageService);
  }

  ngOnInit(): void {
    this.subLoading();
  }

  private subLoading() {
    this.serviceMessages
      .subsLoading()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(
        (loading) => (this.loading = loading),
        (e) => console.log('Error al mostrar el loading', e)
      );
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
     <app-sidebar></app-sidebar>
     <main id="main" class="main">
       <router-outlet></router-outlet>
     </main>
      <footer id="footer" class="footer">
        <div class="row p-0 m-0">
           <div class="col-lg-4">
             <div class="copyright">
               <strong><span>AV. Canada 1470, San Borja-Lima 47, Perú</span></strong>
               <strong><span>Central Telefónico 0062-1-344344</span></strong>
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
         
      </footer>
  `,
  styles: [``],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

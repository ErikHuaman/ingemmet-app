import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './view/inicio/inicio.component';
import { CommonImportModule } from 'src/app/core/common-import.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { VideoCardComponent } from './components/video-card/video-card.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { NoticiasCardComponent } from './components/noticias-card/noticias-card.component';
import { AplicacionesCardComponent } from './components/aplicaciones-card/aplicaciones-card.component';

@NgModule({
  declarations: [
    InicioComponent,
    CarouselComponent,
    VideoCardComponent,
    SocialCardComponent,
    NoticiasCardComponent,
    AplicacionesCardComponent,
  ],
  imports: [CommonImportModule],
  exports: [
    InicioComponent,
    CarouselComponent,
    VideoCardComponent,
    SocialCardComponent,
    NoticiasCardComponent,
    AplicacionesCardComponent,
  ],
})
export class InicioModule {}

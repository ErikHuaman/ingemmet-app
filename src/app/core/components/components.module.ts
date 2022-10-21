import { NgModule } from '@angular/core';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { CommonImportModule } from '../common-import.module';
import { IngemmetLoadingComponent } from './ingemmet-loading/ingemmet-loading.component';
const BASE_MODULES = [
  NuevoEventoComponent, 
  IngemmetLoadingComponent
]
@NgModule({
  imports: [CommonImportModule],
  declarations: [...BASE_MODULES, ],
  exports: [...BASE_MODULES],
})
export class ComponentsModule {}

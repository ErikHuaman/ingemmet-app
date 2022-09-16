import { NgModule } from '@angular/core';
import { NuevoEventoComponent } from './nuevo-evento/nuevo-evento.component';
import { CommonImportModule } from '../common-import.module';

@NgModule({
  declarations: [NuevoEventoComponent],
  imports: [CommonImportModule],
})
export class ComponentsModule {}

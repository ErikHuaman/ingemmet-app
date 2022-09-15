import { NgModule } from '@angular/core';
import { AdministracionComponent } from './view/administracion/administracion.component';
import { CommonImportModule } from 'src/app/core/common-import.module';

@NgModule({
  declarations: [AdministracionComponent],
  exports: [AdministracionComponent],
  imports: [CommonImportModule],
})
export class AdministracionModule {}

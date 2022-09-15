import { NgModule } from '@angular/core';
import { GeologiaComponent } from './view/geologia/geologia.component';
import { CommonImportModule } from 'src/app/core/common-import.module';

@NgModule({
  declarations: [GeologiaComponent],
  imports: [CommonImportModule],
  exports: [GeologiaComponent],
})
export class GeologiaModule {}

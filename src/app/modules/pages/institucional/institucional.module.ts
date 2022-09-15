import { NgModule } from '@angular/core';
import { InstitucionalComponent } from './view/institucional/institucional.component';
import { CommonImportModule } from 'src/app/core/common-import.module';

@NgModule({
  declarations: [InstitucionalComponent],
  imports: [CommonImportModule],
  exports: [InstitucionalComponent],
})
export class InstitucionalModule {}

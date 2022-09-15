import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './view/inicio/inicio.component';
import { CommonImportModule } from 'src/app/core/common-import.module';

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonImportModule],
  exports: [InicioComponent],
})
export class InicioModule {}

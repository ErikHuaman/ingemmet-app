import { NgModule } from '@angular/core';
import { CommonImportModule } from './common-import.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonImportModule, ComponentsModule],
  exports: [CommonImportModule],
})
export class CoreModule {}

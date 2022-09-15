import { NgModule } from '@angular/core';
import { CommonImportModule } from 'src/app/core/common-import.module';
import { DirectorioTelefonicoComponent } from './components/directorio-telefonico/directorio-telefonico.component';
import { SidebarComponent } from './view/sidebar.component';

@NgModule({
  declarations: [SidebarComponent, DirectorioTelefonicoComponent],
  exports: [SidebarComponent, DirectorioTelefonicoComponent],
  imports: [CommonImportModule],
})
export class SidebarModule {}

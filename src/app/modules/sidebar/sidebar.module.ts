import { NgModule } from '@angular/core';
import { CommonImportModule } from 'src/app/core/common-import.module';
import { DirectorioTelefonicoComponent } from './components/directorio-telefonico/directorio-telefonico.component';
import { SidebarComponent } from './view/sidebar.component';
import { CumpleaniosComponent } from './components/cumpleanios/cumpleanios.component';
import { NewtrabajadoresComponent } from './components/newtrabajadores/newtrabajadores.component';

@NgModule({
  declarations: [SidebarComponent, DirectorioTelefonicoComponent, CumpleaniosComponent, NewtrabajadoresComponent],
  exports: [SidebarComponent, DirectorioTelefonicoComponent, CumpleaniosComponent, NewtrabajadoresComponent],
  imports: [CommonImportModule],
})
export class SidebarModule {}

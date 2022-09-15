import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { InicioModule } from './pages/inicio/inicio.module';
import { InstitucionalModule } from './pages/institucional/institucional.module';
import { MineriaModule } from './pages/mineria/mineria.module';
import { GeologiaModule } from './pages/geologia/geologia.module';
import { AdministracionModule } from './pages/administracion/administracion.module';
import { SistemaDeGestionModule } from './pages/sistema-de-gestion/sistema-de-gestion.module';
import { TecnologiaModule } from './pages/tecnologia/tecnologia.module';
import { DirectorioTelefonicoComponent } from './sidebar/components/directorio-telefonico/directorio-telefonico.component';

@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    SidebarComponent,
    DirectorioTelefonicoComponent,
  ],
  exports: [LoginComponent, MainComponent, DirectorioTelefonicoComponent],
  imports: [
    CoreModule,
    RouterModule,
    InicioModule,
    InstitucionalModule,
    MineriaModule,
    GeologiaModule,
    AdministracionModule,
    SistemaDeGestionModule,
    TecnologiaModule,
  ],
})
export class ModulesModule {}

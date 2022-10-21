import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { InicioModule } from './pages/inicio/inicio.module';
import { InstitucionalModule } from './pages/institucional/institucional.module';
import { MineriaModule } from './pages/mineria/mineria.module';
import { GeologiaModule } from './pages/geologia/geologia.module';
import { AdministracionModule } from './pages/administracion/administracion.module';
import { SistemaDeGestionModule } from './pages/sistema-de-gestion/sistema-de-gestion.module';
import { TecnologiaModule } from './pages/tecnologia/tecnologia.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AllAplicacionComponent } from './pages/all-aplicacion/all-aplicacion.component';
import { MenuNavegacionComponent } from './pages/menu-navegacion/menu-navegacion.component';
import { ComponentsModule } from '../core/components/components.module';

@NgModule({
  declarations: [LoginComponent, MainComponent, AllAplicacionComponent, MenuNavegacionComponent],
  exports: [LoginComponent, MainComponent],
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
    SidebarModule,
    ComponentsModule
    
  ],
})
export class ModulesModule {}

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [LoginComponent, MainComponent, AllAplicacionComponent, MenuNavegacionComponent, Error404Component],
  exports: [LoginComponent, MainComponent],
  imports: [
    CoreModule, 
    RouterModule,
    InicioModule,
    BrowserAnimationsModule,
    InstitucionalModule,
    MineriaModule,
    GeologiaModule,
    AdministracionModule,
    SistemaDeGestionModule,
    TecnologiaModule, 
    SidebarModule,
    ComponentsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    
  ],
})
export class ModulesModule {}

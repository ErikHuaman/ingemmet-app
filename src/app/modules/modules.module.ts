import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@NgModule({
  declarations: [LoginComponent, MainComponent, SidebarComponent],
  exports: [LoginComponent, MainComponent],
  imports: [CommonModule, RouterModule, InicioModule, InstitucionalModule, MineriaModule, GeologiaModule, AdministracionModule, SistemaDeGestionModule, TecnologiaModule],
})
export class ModulesModule {}

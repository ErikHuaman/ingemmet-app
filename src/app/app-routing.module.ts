import { NoticiasComponent } from './modules/pages/sistema-de-gestion/view/components/noticias/noticias.component';
import { RedesSocialesComponent } from './modules/pages/sistema-de-gestion/view/components/redes-sociales/redes-sociales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { InicioComponent } from './modules/pages/inicio/view/inicio/inicio.component';
import { AplicacionesComponent } from './modules/pages/sistema-de-gestion/view/components/aplicaciones/aplicaciones.component';
import { InfografiaComponent } from './modules/pages/sistema-de-gestion/view/components/infografia/infografia.component';
import { DocumentosComponent } from './modules/pages/sistema-de-gestion/view/components/documentos/documentos.component';
import { OrganigramaComponent } from './modules/pages/sistema-de-gestion/view/components/organigrama/organigrama.component';
import { VideosComponent } from './modules/pages/sistema-de-gestion/view/components/videos/videos.component';
import { SistemaDeGestionComponent } from './modules/pages/sistema-de-gestion/view/sistema-de-gestion/sistema-de-gestion.component';
import { AgendaComponent } from './modules/pages/sistema-de-gestion/view/components/agenda/agenda.component';
import { GeologiaComponent } from './modules/pages/geologia/view/geologia/geologia.component';
import { AdministracionComponent } from './modules/pages/administracion/view/administracion/administracion.component';
import { MineriaComponent } from './modules/pages/mineria/view/mineria/mineria.component';
import { InstitucionalComponent } from './modules/pages/institucional/view/institucional/institucional.component';
import { TecnologiaComponent } from './modules/pages/tecnologia/view/tecnologia/tecnologia.component';
import { AllAplicacionComponent } from './modules/pages/all-aplicacion/all-aplicacion.component';
import { MenuNavegacionComponent } from './modules/pages/menu-navegacion/menu-navegacion.component';
import { AuthGuard } from './guards/auth.guard';
import { Error404Component } from './modules/error404/error404.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        component: InicioComponent,  canActivate : [AuthGuard]
      },
      {
        path: 'institucional',
        component: InstitucionalComponent,canActivate : [AuthGuard]
      },
      {
        path: 'mineria',
        component: MineriaComponent,canActivate : [AuthGuard]
      },
      {
        path: 'geologia',
        component: GeologiaComponent,canActivate : [AuthGuard]
      },
      {
        path: 'administracion',
        component: AdministracionComponent,canActivate : [AuthGuard]
      },
      {
        path: 'aplicaciones',
        component: AllAplicacionComponent,canActivate : [AuthGuard]
      },
      {
        path: 'pagina-dinamica/:id',
        component: MenuNavegacionComponent,canActivate : [AuthGuard]
      },
      {
        path: 'sistema-de-gestion',
        component: SistemaDeGestionComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'organigrama',
          },
          {
            path: 'organigrama',
            component: OrganigramaComponent,canActivate : [AuthGuard]
          },
          {
            path: 'videos',
            component: VideosComponent,canActivate : [AuthGuard]
          },
          {
            path: 'aplicaciones',
            component: AllAplicacionComponent,canActivate : [AuthGuard]
          },
          {
            path: 'documentos',
            component: DocumentosComponent,canActivate : [AuthGuard]
          },
          {
            path: 'infografia',
            component: InfografiaComponent,canActivate : [AuthGuard]
          },
          {
            path: 'agenda',
            component: AgendaComponent,canActivate : [AuthGuard]
          },
          {
            path: 'redes-sociales',
            component: RedesSocialesComponent,canActivate : [AuthGuard]
          },
          {
            path: 'noticias',
            component: NoticiasComponent,canActivate : [AuthGuard]
          },
        ],
      },
      {
        path: 'tecnologia',
        component: TecnologiaComponent,canActivate : [AuthGuard]
      },
      {
        path : '**',  pathMatch: 'full', component: Error404Component,canActivate : [AuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
        component: InicioComponent,
      },
      {
        path: 'institucional',
        component: InstitucionalComponent,
      },
      {
        path: 'mineria',
        component: MineriaComponent,
      },
      {
        path: 'geologia',
        component: GeologiaComponent,
      },
      {
        path: 'administracion',
        component: AdministracionComponent,
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
            component: OrganigramaComponent,
          },
          {
            path: 'videos',
            component: VideosComponent,
          },
          {
            path: 'aplicaciones',
            component: AplicacionesComponent,
          },
          {
            path: 'documentos',
            component: DocumentosComponent,
          },
          {
            path: 'infografia',
            component: InfografiaComponent,
          },
          {
            path: 'agenda',
            component: AgendaComponent,
          },
          {
            path: 'redes-sociales',
            component: RedesSocialesComponent,
          },
          {
            path: 'noticias',
            component: NoticiasComponent,
          },
        ],
      },
      {
        path: 'tecnologia',
        component: TecnologiaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { InicioComponent } from './modules/pages/inicio/view/inicio/inicio.component';
import { AplicacionesComponent } from './modules/pages/sistema-de-gestion/view/components/aplicaciones/aplicaciones.component';
import { DocumentosSgcComponent } from './modules/pages/sistema-de-gestion/view/components/documentos-sgc/documentos-sgc.component';
import { DocumentosComponent } from './modules/pages/sistema-de-gestion/view/components/documentos/documentos.component';
import { OrganigramaComponent } from './modules/pages/sistema-de-gestion/view/components/organigrama/organigrama.component';
import { VideosComponent } from './modules/pages/sistema-de-gestion/view/components/videos/videos.component';
import { SistemaDeGestionComponent } from './modules/pages/sistema-de-gestion/view/sistema-de-gestion/sistema-de-gestion.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'institucional',
        component: InicioComponent,
      },
      {
        path: 'mineria',
        component: InicioComponent,
      },
      {
        path: 'geologia',
        component: InicioComponent,
      },
      {
        path: 'administracion',
        component: InicioComponent,
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
            component: DocumentosSgcComponent,
          },
          {
            path: 'agenda',
            component: VideosComponent,
          },
          {
            path: 'redes-sociales',
            component: VideosComponent,
          },
          {
            path: 'noticias',
            component: VideosComponent,
          },
        ],
      },
      {
        path: 'tecnologia',
        component: InicioComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

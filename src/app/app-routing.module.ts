import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {VacantesPage} from './pages/vacantes/vacantes.page';


const routes: Routes = [
   {
     path: '',
       redirectTo: 'login',
     pathMatch: 'full'
   },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'vacantes',
        loadChildren: () => import('./pages/vacantes/vacantes.module').then(m => m.VacantesPageModule)
    },
    {
        path: 'vacante',
        loadChildren: () => import('./pages/vacante/vacante.module').then(m => m.VacantePageModule)
    },
    {
        path: 'vacante/:id',
        loadChildren: () => import('./pages/vacante/vacante.module').then(m => m.VacantePageModule)
    },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  //  {
  //    path: 'vacantes',
  //    loadChildren: () => import('./pages/vacantes/vacantes.module').then( m => m.VacantesPageModule)
  //  },
  //  {
  //    path: 'vacante',
  //    loadChildren: () => import('./pages/vacante/vacante.module').then( m => m.VacantePageModule)
  //  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

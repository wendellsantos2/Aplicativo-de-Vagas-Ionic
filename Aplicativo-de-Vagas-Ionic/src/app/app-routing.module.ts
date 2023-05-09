import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'logo',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'profile/edit',
    loadChildren: () => import('./profile-edit/profile-edit.module').then( m => m.ProfileEditPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
    ,canActivate:[AuthGuard]
  },
  {
    path: 'vaga',
    loadChildren: () => import('./vaga/vaga.module').then( m => m.VagaPageModule)
  },
     {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./logo/logo.module').then( m => m.LogoPageModule)
  },
  
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }, {
    path: 'cadastro-vagas',
    loadChildren: () => import('./cadastro-vagas/cadastro-vagas.module').then( m => m.CadastroVagasPageModule)
  },
  {
    path: 'candidatos-vagas',
    loadChildren: () => import('./candidatos-vagas/candidatos-vagas.module').then( m => m.CandidatosVagasPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  
 
 

   
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

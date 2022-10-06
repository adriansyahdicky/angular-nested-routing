import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'apps',
        loadChildren: ()=> import('./module/navigation/navigation.module').then(x=> x.NavigationModule)
    },
    {
        path: '',
        loadChildren: ()=> import('./module/auth/auth.module').then(x => x.AuthModule)
    },
    {   path: '**', 
        pathMatch: 'full', 
        component: PageNotFoundComponent 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
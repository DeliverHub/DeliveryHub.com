import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { mainModule } from 'process';



const routes: Routes = [
 
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
   
        {
          path: 'home',
          loadChildren: () => import('./Pages/HomeModule/HomeModule.module').then(m => m.HomeModuleModule),
           
        } ,{
          path: 'login',
          loadChildren: () => import('./Pages/Auth/Auth.module').then(m => m.AuthModule),
           
        },
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CustomPreloadingStrategyService } from './services/CustomPreloadingStrategyService.service';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '', component: LandingpageComponent },
  /**
   * Lazy loading : Load whenever required, improves performance
   */
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule),
  },
  {
    path: 'preload1',
    data:{preload:true},
    loadChildren: () =>
      import('./preload-module1/preload-module1.module').then(m => m.PreloadModule1Module),
  },
  {
    path: 'preload2',
    data:{preload:true},
    loadChildren: () =>
      import('./preload-module2/preload-module2.module').then(m => m.PreloadModule2Module),
  },
  {
    path: 'preload3',
    data:{preload:true},
    loadChildren: () =>
      import('./preload-module3/preload-module3.module').then(m => m.PreloadModule3Module),
  }
  /**
   * End
   */
];

@NgModule({
  imports: [
    /**
     * Preload all modules - easy way but hampers performance
     */
    // RouterModule.forRoot(routes, {
    //   preloadingStrategy: PreloadAllModules,
    // }),
    /**
     * End
     */

    RouterModule.forRoot(routes,{
      preloadingStrategy: CustomPreloadingStrategyService,
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

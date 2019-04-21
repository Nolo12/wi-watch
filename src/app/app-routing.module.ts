import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'location', loadChildren: './location/location.module#LocationPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './core/support/support.component';
import { ProfileComponent } from './account/profile/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Inicio'}},
  {path: 'support', component: SupportComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)},
  {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

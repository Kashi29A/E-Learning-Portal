import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivateGuard } from '../guards/activate.guard';
import { LayoutComponent } from './layout.component'

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'prefix'
      },
      { path: 'home', loadChildren: ()=> import('../components/home/home.module').then((m)=> m.HomeModule)},
      { path: 'dashboard', loadChildren: ()=> import('../components/dashboard/dashboard.module').then((m=>m.DashboardModule))},
    //, canActivate: [ActivateGuard]
      { path: 'admin', loadChildren: ()=> import('../components/admin/admin.module').then((m=>m.AdminModule))}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

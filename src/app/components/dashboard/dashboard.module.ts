import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ToastModule } from 'primeng/toast';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToastModule,
    ButtonModule
  ]
})
export class DashboardModule { }
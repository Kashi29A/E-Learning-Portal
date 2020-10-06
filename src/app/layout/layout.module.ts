import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module'
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
 
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    TabViewModule,
    NgbModule
  ],
  declarations: [LayoutComponent, HeaderComponent],
})
export class LayoutModule { }

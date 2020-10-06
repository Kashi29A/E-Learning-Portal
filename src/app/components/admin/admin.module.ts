import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component'
import {AdminRoutingModule} from './admin-routing.module'
import { FormsModule } from '@angular/forms';
import {TabViewModule} from 'primeng/tabview';
@NgModule({
    declarations: [AdminComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        TabViewModule
    ],
    providers: []
})
export class AdminModule {  }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module'
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import { HomeserviceService } from 'src/app/services/homeservice.service';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    GalleriaModule
  ],
  providers: [HomeserviceService]
})
export class HomeModule { }

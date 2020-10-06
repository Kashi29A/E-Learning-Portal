import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from './common/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ActivateGuard} from './guards/activate.guard'
import { AuthenticationService } from './services/authentication.service'
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ActivateGuard, AuthenticationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

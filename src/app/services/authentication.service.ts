import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  admin: boolean = false;
  constructor(private router : Router, private messageService: MessageService) { }
  getUserDetails(username, password){
    let decodePassword = window.btoa(password)
    if(username == "kaarora" && decodePassword == "Kashi29A"){
      this.admin = true;
      this.messageService.add({ key: 'bc', severity: 'info', summary: 'Info', detail: 'Message Content' });
      this.router.navigate(['dashboard']);
      return true;
    }else{
      this.admin = false;
      this.router.navigate(['home'])
      return false;
    }
  }
  isAdmin(): boolean{
    return this.admin;
  }
}

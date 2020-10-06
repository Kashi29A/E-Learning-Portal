import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  displayModal: boolean;
  isCollapsed = true;
  username;
  password;
  isAdmin: boolean = false;
  loggedin: boolean = false;
  constructor(private authService: AuthenticationService) { }
  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  }

  login(){
    this.isAdmin = this.authService.getUserDetails(this.username,  window.atob(this.password));
    if(this.isAdmin){
      const newLocal = true;
      this.loggedin = newLocal;
    }
    this.displayModal = false;
  }
}

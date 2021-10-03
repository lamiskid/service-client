import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'service-client';
  sideBarOpen = true;
  isLogin=false;
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  public isAuthenticated(){

    return this.isLogin;


  }

}

 

  
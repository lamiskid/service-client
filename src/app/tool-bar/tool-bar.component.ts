import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/shared/auth.service';
@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  
  
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  isLoggedIn$!: Observable<boolean>;

  constructor(private route:Router,private authService:AuthService) { }

  ngOnInit(): void {
      this.isLoggedIn$ = this.authService.loggedIn; 
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}

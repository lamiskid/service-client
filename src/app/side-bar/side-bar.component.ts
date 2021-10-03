import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  hasBackdrop:any;
  mode!: MatDrawer;
  constructor() { }

  ngOnInit(): void {
  }

}

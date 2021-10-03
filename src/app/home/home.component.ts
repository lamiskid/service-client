import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username!: string;
  toggle = true;
  buttonColor: ThemePalette = 'primary';

  list = Array<any>();

  constructor() { }

  ngOnInit(): void {


  }
  liked(_$event: MouseEvent): void {
    const changeColor = "red"
    if (this.buttonColor === 'primary') {
      this.buttonColor = 'warn'
    } else {
      this.buttonColor = 'primary'
    }

    this.toggle = !this.toggle;

  }

}

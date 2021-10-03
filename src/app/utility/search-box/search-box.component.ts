import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  save(myInput: any){
    console.log(myInput);
  }
  Qjjgt(){
    
  }
  onSubmit(itemForm:any){

  }


}

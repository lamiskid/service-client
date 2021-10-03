import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit,Input } from '@angular/core';
import { faIcons } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


import Animals from './math';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  customers = [{value: 'Ebony'}, {value: 'Chiho'}];
  customer = "";
  display="";

  filmIcon = faFilm;
  faCoffee=faCoffee

  
  constructor() { }
  
  ngOnInit(): void {
  }

  public doSomething(){
    this.customer="This is akindeji";

  }

 public testing(){
  this.display="dosomthing";
  console.log("this is lawal coding ")

  const namePromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(["Anna","Dayo","Chistiana","Deji"]);
    },3000);

    setTimeout(()=>{
      reject("No resposnse back from the server");
    },5000);


  });

  const surnamePromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(["Anguar","Dayo","Chistiana","React"]);
    },3000);

    setTimeout(()=>{
      reject("No resposnse back from the server");
    },5000);


  });

Promise.all([namePromise,surnamePromise]).then((data:any)=>{
const[names,surnames]=data;
for (let i = 0; i <names.length; i++) {
  const name=names[i];
  const surname=surnames[i];
  console.log(`${name}   ${surname}`)

  
}


  
}).catch(error=>{
  console.log(error)
})
    
 

 }

 
}
class Name {
  n:string
  constructor(n:string) {
    this.n=n;
    
  }

  static do(){
    
    console.log("that is a rat");
  }
  nf(){
    console.log(this.n);
  }
}


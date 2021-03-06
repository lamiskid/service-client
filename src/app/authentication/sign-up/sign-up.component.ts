import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SignupRequestPayload } from './SignupRequest.payload';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent implements OnInit {

  signupRequestPayload!: SignupRequestPayload;
  signupForm!: FormGroup;
  hide:Boolean=true;
  Email:String="lawskid";
  
  constructor(private authService: AuthService, private router: Router) {
    this.signupRequestPayload = {
      username: '',
      email: '',
      password:''
    };
  }


  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });

  
  }
  signup() {
    this.signupRequestPayload.email = this.signupForm.get('email')?.value;
    this.signupRequestPayload.username = this.signupForm?.get('username')?.value;
    this.signupRequestPayload.username = this.signupForm?.get('password')?.value;
    this.authService.signup(this.signupRequestPayload)
      .subscribe(data => {
        this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
      }, error => {
        console.log(error);
      });
      this.authService.login(this.signupForm.value);
  }
  
    
  

}

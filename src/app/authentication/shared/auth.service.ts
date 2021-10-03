import { Injectable } from '@angular/core';
import{SignupRequestPayload}from '../sign-up/SignupRequest.payload'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient,private router:Router) {}

  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, { responseType: 'text' });
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }


  login(user: User){
    if (user.userName !== '' && user.password !== '' ) { 
      this.loggedIn.next(true);
      this.router.navigate(['/update']);
    }
  }
 
}

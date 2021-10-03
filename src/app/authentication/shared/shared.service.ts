import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{SignupRequestPayload}from '../sign-up/SignupRequest.payload'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient,
) {
  }
  
  signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/v1/auth/', signupRequestPayload, { responseType: 'text' });
  }
 
 
  
}

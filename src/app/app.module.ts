import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import { ProfileComponent } from './authentication/profile/profile.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import{MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchBoxComponent } from './utility/search-box/search-box.component';
import { HomeComponent } from './home/home.component';
import {MatDividerModule} from '@angular/material/divider';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { EditUserComponent } from './edit-user/edit-user.component'; 



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ProfileComponent,
    LoginComponent,
    ToolBarComponent,
    SearchBoxComponent,
    HomeComponent,
    SideBarComponent,
    EditUserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatDatepickerModule
   
  
    
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
